import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthUtils } from '../middleware/auth';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    // If already authenticated, redirect
    if (AuthUtils.isAuthenticated()) {
      router.push('/experiences/platform');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.success) {
        // Redirect to the assigned experience
        router.push(data.redirect);
      } else {
        setError(data.error || 'Authentication failed');
      }
    } catch (error) {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center px-4">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      {/* Tesla Frequency Indicator */}
      <div className="fixed top-4 right-4 z-50">
        <div className="px-3 py-1 bg-slate-800/80 rounded-full text-xs font-mono">
          <span className="text-emerald-400">●</span> Tesla: 1111Hz Manifestation
        </div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Dreamplanet Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-xl font-bold text-white">DP</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Dreamplanet</h1>
              <p className="text-sm text-slate-400">Experience Access Portal</p>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">Secure Experience Access</h2>
            <p className="text-slate-400 text-sm">
              Enter your access credentials to continue to your assigned experience
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                Access Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                placeholder="Enter your experience password"
                required
                disabled={loading}
              />
            </div>

            {error && (
              <div className="p-3 bg-red-900/30 border border-red-800 rounded-lg text-red-300 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !password}
              className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-slate-600 disabled:to-slate-600 disabled:cursor-not-allowed rounded-lg text-white font-medium transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Authenticating...
                </div>
              ) : (
                'Access Experience'
              )}
            </button>
          </form>

          {/* Experience Types */}
          <div className="mt-8 pt-6 border-t border-slate-700/50">
            <p className="text-xs text-slate-400 text-center mb-4">Available Experiences</p>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2 bg-slate-700/30 rounded-lg text-center">
                <div className="text-green-400">🍎</div>
                <div className="text-slate-300">Claude AVP</div>
              </div>
              <div className="p-2 bg-slate-700/30 rounded-lg text-center">
                <div className="text-amber-400">⏰</div>
                <div className="text-slate-300">Genesis Timeline</div>
              </div>
              <div className="p-2 bg-slate-700/30 rounded-lg text-center">
                <div className="text-indigo-400">⚡</div>
                <div className="text-slate-300">Signal Core</div>
              </div>
              <div className="p-2 bg-slate-700/30 rounded-lg text-center">
                <div className="text-purple-400">🧠</div>
                <div className="text-slate-300">AgenticMind</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <div className="flex items-center justify-center gap-4 text-xs text-slate-500">
            <span>c1 Oracle • Dreamplanet</span>
            <span>•</span>
            <span>Tesla Frequency: 1111Hz Manifestation</span>
          </div>
        </div>
      </div>
    </div>
  );
}