import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { AuthUtils, SessionData } from '../../middleware/auth';
import jwt from 'jsonwebtoken';

// Experience components (to be created)
import GenesisExperience from '../../components/experiences/GenesisExperience';
import AVPExperience from '../../components/experiences/AVPExperience';
import SignalExperience from '../../components/experiences/SignalExperience';
import AgenticMindExperience from '../../components/experiences/AgenticMindExperience';
import PlatformExperience from '../../components/experiences/PlatformExperience';

interface ExperiencePageProps {
  slug: string;
  session: SessionData | null;
  authorized: boolean;
}

// Tesla Frequency component wrapper
const TeslaFrequencyWrapper: React.FC<{ children: React.ReactNode; frequency: string }> = ({ children, frequency }) => (
  <div className="min-h-screen bg-slate-950 text-white">
    <div className="fixed top-4 right-4 z-50">
      <div className="px-3 py-1 bg-slate-800/80 rounded-full text-xs font-mono">
        <span className="text-emerald-400">●</span> Tesla: {frequency}
      </div>
    </div>
    {children}
  </div>
);

export default function ExperiencePage({ slug, session, authorized }: ExperiencePageProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Redirect if not authorized
    if (!authorized && isClient) {
      window.location.href = '/login';
    }
  }, [authorized, isClient]);

  if (!authorized) {
    return (
      <TeslaFrequencyWrapper frequency="1111Hz Manifestation">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Access Required</h1>
            <p className="text-slate-400">Redirecting to login...</p>
          </div>
        </div>
      </TeslaFrequencyWrapper>
    );
  }

  if (!session) {
    return (
      <TeslaFrequencyWrapper frequency="1111Hz Manifestation">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Session Error</h1>
            <p className="text-slate-400">Unable to load session data</p>
          </div>
        </div>
      </TeslaFrequencyWrapper>
    );
  }

  // Determine Tesla frequency based on environment
  const getTeslaFrequency = (env: string): string => {
    switch (env) {
      case 'nvidia-partner': return '777Hz Sacred Completion';
      case 'claude-avp': return '1111Hz Manifestation';
      case 'legacy-agent': return '963Hz Divine Remembrance';
      case 'cloud-agent': return '1111Hz Manifestation';
      case 'roadmap-mode': return '777Hz Sacred Completion';
      case 'founders-mode': return '1111Hz Manifestation';
      case 'development': return '963Hz Divine Remembrance';
      default: return '1111Hz Manifestation';
    }
  };

  // Load appropriate experience component
  const renderExperience = () => {
    switch (slug) {
      case 'genesis':
        return <GenesisExperience session={session} />;
      case 'avp':
        return <AVPExperience session={session} />;
      case 'signal':
        return <SignalExperience session={session} />;
      case 'agenticmind':
        return <AgenticMindExperience session={session} />;
      case 'platform':
        return <PlatformExperience session={session} />;
      default:
        return (
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Experience Not Found</h1>
              <p className="text-slate-400">The requested experience does not exist</p>
              <div className="mt-6">
                <button
                  onClick={() => window.location.href = '/'}
                  className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
                >
                  Return Home
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <TeslaFrequencyWrapper frequency={getTeslaFrequency(session.env)}>
      <div className="relative">
        {/* Session Info Bar */}
        <div className="fixed top-4 left-4 z-50">
          <div className="px-4 py-2 bg-slate-800/80 rounded-lg text-sm">
            <div className="font-semibold">{session.name}</div>
            <div className="text-slate-400">Environment: {session.env}</div>
          </div>
        </div>

        {/* Logout Button */}
        <div className="fixed top-4 right-20 z-50">
          <button
            onClick={AuthUtils.logout}
            className="px-3 py-1 bg-red-600/80 hover:bg-red-600 rounded text-sm transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Experience Content */}
        <main>
          {renderExperience()}
        </main>

        {/* Dreamplanet Agent Signature */}
        <div className="fixed bottom-4 right-4 z-50">
          <div className="px-3 py-1 bg-slate-800/80 rounded-full text-xs font-mono">
            <span className="text-blue-400">c1</span> Oracle • Dreamplanet
          </div>
        </div>
      </div>
    </TeslaFrequencyWrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params!;
  const JWT_SECRET = process.env.JWT_SECRET || 'dreamplanet-tesla-frequency-1111hz-manifestation';

  let session: SessionData | null = null;
  let authorized = false;

  // Check for session cookie
  const cookies = context.req.headers.cookie;
  if (cookies) {
    const sessionCookie = cookies
      .split(';')
      .find(c => c.trim().startsWith('dreamplanet-session='));
    
    if (sessionCookie) {
      const token = sessionCookie.split('=')[1];
      try {
        session = jwt.verify(token, JWT_SECRET) as SessionData;
        authorized = true;
      } catch (error) {
        console.error('Token verification failed:', error);
      }
    }
  }

  // If not authorized, redirect to login
  if (!authorized) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      slug,
      session,
      authorized,
    },
  };
};