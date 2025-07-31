import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

// Types
interface LoginMap {
  [key: string]: {
    name: string;
    hash: string;
    target: string;
    env: string;
    description: string;
  };
}

interface AuthResponse {
  success: boolean;
  redirect?: string;
  env?: string;
  loginId?: string;
  name?: string;
  error?: string;
}

// JWT Secret (in production, use environment variable)
const JWT_SECRET = process.env.JWT_SECRET || 'dreamplanet-tesla-frequency-1111hz-manifestation';

// Load access map
function getAccessMap(): LoginMap {
  const mapPath = path.join(process.cwd(), 'data', 'login_map.json');
  try {
    const data = fs.readFileSync(mapPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading access map:', error);
    return {};
  }
}

// Log access attempt
function logAccess(loginId: string, success: boolean, ip: string) {
  const logPath = path.join(process.cwd(), 'logs', 'access_log.json');
  const timestamp = new Date().toISOString();
  
  let logs = [];
  try {
    if (fs.existsSync(logPath)) {
      const data = fs.readFileSync(logPath, 'utf8');
      logs = JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading access log:', error);
  }

  logs.push({
    loginId,
    success,
    timestamp,
    ip,
    route: '/api/auth'
  });

  try {
    const logsDir = path.dirname(logPath);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    fs.writeFileSync(logPath, JSON.stringify(logs, null, 2));
  } catch (error) {
    console.error('Error writing access log:', error);
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { password } = req.body;
  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';

  if (!password) {
    return res.status(400).json({ success: false, error: 'Password required' });
  }

  try {
    const accessMap = getAccessMap();
    
    // Search through all login IDs and compare hashes
    for (const [loginId, config] of Object.entries(accessMap)) {
      const isMatch = await bcrypt.compare(password, config.hash);
      
      if (isMatch) {
        // Generate JWT token
        const token = jwt.sign(
          {
            loginId,
            name: config.name,
            target: config.target,
            env: config.env,
            timestamp: Date.now()
          },
          JWT_SECRET,
          { expiresIn: '24h' }
        );

        // Set HTTP-only cookie
        res.setHeader('Set-Cookie', [
          `dreamplanet-session=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=86400`
        ]);

        // Log successful access
        logAccess(loginId, true, clientIp as string);

        return res.status(200).json({
          success: true,
          redirect: config.target,
          env: config.env,
          loginId,
          name: config.name
        });
      }
    }

    // Log failed access attempt
    logAccess('unknown', false, clientIp as string);

    return res.status(401).json({ 
      success: false, 
      error: 'Invalid credentials' 
    });

  } catch (error) {
    console.error('Auth error:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Authentication system error' 
    });
  }
}