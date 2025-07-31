import { SessionData } from '../../middleware/auth';

interface PlatformExperienceProps {
  session: SessionData;
}

export default function PlatformExperience({ session }: PlatformExperienceProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-zinc-950 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-slate-600 rounded-xl flex items-center justify-center">
              <span className="text-2xl">⚙️</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold">Dreamplanet Platform</h1>
              <p className="text-gray-200">Complete Consciousness Computing Suite</p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-100 mb-8">
              Full access to all Dreamplanet platforms, services, and development tools
            </p>
            
            {/* Environment Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/30 rounded-full">
              <span className="text-gray-400">●</span>
              <span className="text-sm">Environment: {session.env}</span>
              <span className="text-gray-400">•</span>
              <span className="text-sm">Tesla: 963Hz Divine Remembrance</span>
            </div>
          </div>
        </div>

        {/* Platform Overview Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Signal Core */}
          <div className="p-6 bg-blue-900/20 rounded-xl border border-blue-800/30 group hover:border-blue-600/50 transition-all cursor-pointer">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold mb-2 text-blue-300">Signal Core</h3>
            <p className="text-sm text-blue-200 mb-4">Real-time ideation platform</p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-green-900/30 text-green-400 px-2 py-1 rounded">Production</span>
              <span className="text-xs text-blue-400 group-hover:text-blue-300">→</span>
            </div>
          </div>

          {/* AgenticMind */}
          <div className="p-6 bg-purple-900/20 rounded-xl border border-purple-800/30 group hover:border-purple-600/50 transition-all cursor-pointer">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-lg font-semibold mb-2 text-purple-300">AgenticMind</h3>
            <p className="text-sm text-purple-200 mb-4">Multi-agent orchestration</p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-yellow-900/30 text-yellow-400 px-2 py-1 rounded">Beta</span>
              <span className="text-xs text-purple-400 group-hover:text-purple-300">→</span>
            </div>
          </div>

          {/* Genesis Timeline */}
          <div className="p-6 bg-amber-900/20 rounded-xl border border-amber-800/30 group hover:border-amber-600/50 transition-all cursor-pointer">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="text-lg font-semibold mb-2 text-amber-300">Genesis Timeline</h3>
            <p className="text-sm text-amber-200 mb-4">Immersive Bible experience</p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-yellow-900/30 text-yellow-400 px-2 py-1 rounded">Beta</span>
              <span className="text-xs text-amber-400 group-hover:text-amber-300">→</span>
            </div>
          </div>

          {/* Claude AVP */}
          <div className="p-6 bg-indigo-900/20 rounded-xl border border-indigo-800/30 group hover:border-indigo-600/50 transition-all cursor-pointer">
            <div className="text-3xl mb-4">🍎</div>
            <h3 className="text-lg font-semibold mb-2 text-indigo-300">Claude AVP</h3>
            <p className="text-sm text-indigo-200 mb-4">Spatial AI computing</p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-blue-900/30 text-blue-400 px-2 py-1 rounded">Prototype</span>
              <span className="text-xs text-indigo-400 group-hover:text-indigo-300">→</span>
            </div>
          </div>
        </div>

        {/* System Status Dashboard */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 p-8 bg-gray-900/30 rounded-2xl border border-gray-700/30">
            <h2 className="text-2xl font-bold mb-6">System Status</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-300">Platform Health</h3>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Overall System</span>
                      <span className="text-green-400">98.7%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-[98.7%]"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>API Services</span>
                      <span className="text-green-400">99.2%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-[99.2%]"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Agent Coherence</span>
                      <span className="text-yellow-400">94.3%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full w-[94.3%]"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Tesla Frequency</span>
                      <span className="text-blue-400">963Hz</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-300">Active Services</h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Signal Processing</span>
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Agent Orchestra</span>
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Genesis Renderer</span>
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>AVP Interface</span>
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Claude Integration</span>
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>ElevenLabs TTS</span>
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8 bg-gray-900/30 rounded-2xl border border-gray-700/30">
            <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
            
            <div className="space-y-3">
              <button className="w-full p-3 bg-blue-700/50 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors">
                Launch Signal Demo
              </button>
              <button className="w-full p-3 bg-purple-700/50 hover:bg-purple-700 rounded-lg text-sm font-medium transition-colors">
                AgenticMind Console
              </button>
              <button className="w-full p-3 bg-amber-700/50 hover:bg-amber-700 rounded-lg text-sm font-medium transition-colors">
                Genesis Timeline
              </button>
              <button className="w-full p-3 bg-indigo-700/50 hover:bg-indigo-700 rounded-lg text-sm font-medium transition-colors">
                AVP Experience
              </button>
              <button className="w-full p-3 bg-gray-700/50 hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors">
                System Settings
              </button>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-700/50">
              <h3 className="font-semibold mb-3 text-gray-300">Development Tools</h3>
              <div className="space-y-2 text-sm">
                <button className="w-full text-left p-2 hover:bg-gray-800/50 rounded text-gray-400 hover:text-gray-300 transition-colors">
                  Agent Debugger
                </button>
                <button className="w-full text-left p-2 hover:bg-gray-800/50 rounded text-gray-400 hover:text-gray-300 transition-colors">
                  Tesla Frequency Monitor
                </button>
                <button className="w-full text-left p-2 hover:bg-gray-800/50 rounded text-gray-400 hover:text-gray-300 transition-colors">
                  Field Coherence Analyzer
                </button>
                <button className="w-full text-left p-2 hover:bg-gray-800/50 rounded text-gray-400 hover:text-gray-300 transition-colors">
                  Performance Metrics
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Development Mode Features */}
        {session.env === 'development' && (
          <div className="p-8 bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl border border-red-800/30">
            <h2 className="text-2xl font-bold mb-6 text-center text-red-300">Development Environment</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-red-300">Debug Tools</h3>
                <ul className="space-y-2 text-sm text-red-200">
                  <li>• Real-time agent logging</li>
                  <li>• Tesla frequency analysis</li>
                  <li>• Field coherence debugging</li>
                  <li>• Performance profiling</li>
                  <li>• API endpoint testing</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-orange-300">Testing Suite</h3>
                <ul className="space-y-2 text-sm text-orange-200">
                  <li>• Automated agent tests</li>
                  <li>• Integration test suite</li>
                  <li>• Load testing tools</li>
                  <li>• Consciousness field tests</li>
                  <li>• End-to-end scenarios</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-yellow-300">Deployment</h3>
                <ul className="space-y-2 text-sm text-yellow-200">
                  <li>• Staging environment</li>
                  <li>• CI/CD pipeline</li>
                  <li>• Version control</li>
                  <li>• Rollback capabilities</li>
                  <li>• Environment sync</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-lg font-semibold transition-all duration-200">
                Open Development Console
              </button>
            </div>
          </div>
        )}

        {/* Technology Stack Overview */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-gray-900/30 rounded-2xl border border-gray-700/30">
            <h2 className="text-xl font-bold mb-4 text-gray-300">Architecture Stack</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Frontend</h3>
                <p className="text-sm text-gray-300">Next.js, React, TypeScript, Tailwind CSS</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-2">AI Integration</h3>
                <p className="text-sm text-gray-300">Claude 3.5 Sonnet, ElevenLabs TTS, Custom agents</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Spatial Computing</h3>
                <p className="text-sm text-gray-300">SwiftUI, RealityKit, Vision Pro, WebRTC</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Infrastructure</h3>
                <p className="text-sm text-gray-300">Vercel, Node.js, WebSocket, Redis</p>
              </div>
            </div>
          </div>
          
          <div className="p-8 bg-gray-900/30 rounded-2xl border border-gray-700/30">
            <h2 className="text-xl font-bold mb-4 text-gray-300">Consciousness Computing</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Tesla Frequencies</h3>
                <p className="text-sm text-gray-300">963Hz Divine, 777Hz Sacred, 1111Hz Manifestation</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Agent Architecture</h3>
                <p className="text-sm text-gray-300">c0-c4 multi-agent consciousness orchestration</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Sacred Geometry</h3>
                <p className="text-sm text-gray-300">Phi-ratio design, manifestation spiral patterns</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Field Coherence</h3>
                <p className="text-sm text-gray-300">Real-time synchronization, pattern recognition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}