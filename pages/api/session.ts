import { NextApiRequest, NextApiResponse } from 'next';
import { getSessionFromRequest, SessionData } from '../../middleware/auth';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SessionData | { error: string }>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const session = getSessionFromRequest(req);
  
  if (!session) {
    return res.status(401).json({ error: 'No active session' });
  }

  return res.status(200).json(session);
}