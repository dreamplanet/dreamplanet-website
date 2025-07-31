import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'dreamplanet-tesla-frequency-1111hz-manifestation';

// Session data interface
export interface SessionData {
  loginId: string;
  name: string;
  target: string;
  env: string;
  timestamp: number;
}

// Log route access (server-side only)
function logRouteAccess(loginId: string, route: string, env: string, ip: string) {
  // Only log on server-side
  if (typeof window === 'undefined') {
    try {
      // Dynamic import for server-side only
      const fs = require('fs');
      const path = require('path');
      
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
        success: true,
        timestamp,
        ip,
        route,
        environment: env
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
    } catch (error) {
      console.error('Error accessing file system:', error);
    }
  }
}

// Verify session token
export function verifySession(token: string): SessionData | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as SessionData;
    return decoded;
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
}

// Extract session from request
export function getSessionFromRequest(req: NextApiRequest): SessionData | null {
  // Try cookie first
  const cookies = req.headers.cookie;
  if (cookies) {
    const sessionCookie = cookies
      .split(';')
      .find(c => c.trim().startsWith('dreamplanet-session='));
    
    if (sessionCookie) {
      const token = sessionCookie.split('=')[1];
      return verifySession(token);
    }
  }

  // Try Authorization header as fallback
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.substring(7);
    return verifySession(token);
  }

  return null;
}

// Middleware function for protecting routes
export function requireAuth(handler: (req: NextApiRequest, res: NextApiResponse, session: SessionData) => Promise<void>) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const session = getSessionFromRequest(req);
    
    if (!session) {
      return res.status(401).json({ 
        error: 'Authentication required',
        redirect: '/login'
      });
    }

    // Log the route access
    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
    const route = req.url || 'unknown';
    logRouteAccess(session.loginId, route, session.env, clientIp as string);

    // Call the actual handler with session data
    await handler(req, res, session);
  };
}

// Client-side auth utilities
export const AuthUtils = {
  // Check if user is authenticated (for client-side)
  isAuthenticated: (): boolean => {
    if (typeof window === 'undefined') return false;
    
    const cookies = document.cookie;
    return cookies.includes('dreamplanet-session=');
  },

  // Get session data (for client-side)
  getSessionData: async (): Promise<SessionData | null> => {
    if (typeof window === 'undefined') return null;
    
    try {
      const response = await fetch('/api/session');
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error('Error fetching session:', error);
    }
    return null;
  },

  // Logout (clear session)
  logout: (): void => {
    if (typeof window === 'undefined') return;
    
    // Clear cookie
    document.cookie = 'dreamplanet-session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    
    // Redirect to login
    window.location.href = '/login';
  }
};