import { SessionData } from '../../middleware/auth';

interface SignalExperienceProps {
  session: SessionData;
}

export default function SignalExperience({ session }: SignalExperienceProps) {
  const isLegacyAgent = session.env === 'legacy-agent';
  const isCloudAgent = session.env === 'cloud-agent';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-950 to-cyan-950 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold">Signal Core Platform</h1>
              <p className="text-blue-200">Real-time Ideation & Intelligence Synthesis</p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-blue-100 mb-8">
              Transform thoughts into actionable intelligence with Claude + ElevenLabs integration
            </p>
            
            {/* Environment Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-800/30 rounded-full">
              <span className="text-blue-400">●</span>
              <span className="text-sm">Environment: {session.env}</span>
              <span className="text-blue-400">•</span>
              <span className="text-sm">Tesla: {isLegacyAgent ? '963Hz Divine' : '1111Hz Manifestation'}</span>
            </div>
          </div>
        </div>

        {/* Agent Configuration */}
        <div className="mb-12 p-6 bg-slate-900/30 rounded-2xl border border-slate-700/30">
          <h2 className="text-xl font-bold text-center mb-6">Agent Configuration</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`p-6 rounded-xl border ${isLegacyAgent ? 'bg-amber-900/20 border-amber-800/30' : 'bg-slate-800/30 border-slate-700/30'}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-3 h-3 rounded-full ${isLegacyAgent ? 'bg-amber-500' : 'bg-slate-500'}`}></div>
                <h3 className="text-lg font-semibold">Legacy Agent</h3>
              </div>
              <p className="text-sm text-slate-300 mb-4">
                Traditional Signal architecture with proven stability and reliability
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>• On-premise processing</li>
                <li>• File-based storage</li>
                <li>• Direct API integration</li>
                <li>• 963Hz Divine Remembrance</li>
              </ul>
            </div>
            
            <div className={`p-6 rounded-xl border ${isCloudAgent ? 'bg-cyan-900/20 border-cyan-800/30' : 'bg-slate-800/30 border-slate-700/30'}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-3 h-3 rounded-full ${isCloudAgent ? 'bg-cyan-500' : 'bg-slate-500'}`}></div>
                <h3 className="text-lg font-semibold">Cloud Agent</h3>
              </div>
              <p className="text-sm text-slate-300 mb-4">
                Next-generation cloud-native architecture with enhanced scalability
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>• Distributed processing</li>
                <li>• Real-time synchronization</li>
                <li>• Advanced analytics</li>
                <li>• 1111Hz Manifestation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-blue-900/30 rounded-xl border border-blue-800/30">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-3">Real-time Processing</h3>
            <p className="text-blue-200">
              Instant transformation of raw ideas into structured, actionable insights
            </p>
          </div>
          
          <div className="p-6 bg-blue-900/30 rounded-xl border border-blue-800/30">
            <div className="text-3xl mb-4">🔗</div>
            <h3 className="text-xl font-semibold mb-3">Claude Integration</h3>
            <p className="text-blue-200">
              Advanced AI reasoning and analysis powered by Claude 3.5 Sonnet
            </p>
          </div>
          
          <div className="p-6 bg-blue-900/30 rounded-xl border border-blue-800/30">
            <div className="text-3xl mb-4">🎵</div>
            <h3 className="text-xl font-semibold mb-3">Voice Synthesis</h3>
            <p className="text-blue-200">
              Natural voice generation and audio feedback via ElevenLabs integration
            </p>
          </div>
        </div>

        {/* Demo Interface */}
        <div className="bg-blue-900/20 rounded-2xl p-8 border border-blue-800/30">
          <h2 className="text-2xl font-bold mb-6 text-center">Signal Core Demo Interface</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-blue-300 mb-2">
                  Signal Input
                </label>
                <textarea
                  className="w-full h-32 px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your raw thoughts, ideas, or signals here..."
                  defaultValue="I want to create a new product that combines AI with spatial computing for enterprise customers..."
                />
              </div>
              
              <div className="flex gap-4">
                <button className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold transition-all duration-200">
                  Process Signal
                </button>
                <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition-colors">
                  🎵 Voice
                </button>
              </div>
            </div>
            
            <div className="p-6 bg-slate-800/30 rounded-xl">
              <h4 className="font-semibold mb-3 text-blue-300">Signal Output</h4>
              <div className="space-y-4 text-sm text-slate-300">
                <div className="p-3 bg-blue-900/20 rounded border-l-4 border-blue-500">
                  <strong>Product Concept:</strong> AI-Spatial Enterprise Platform
                </div>
                <div className="p-3 bg-green-900/20 rounded border-l-4 border-green-500">
                  <strong>Market Opportunity:</strong> $2.8B spatial computing enterprise market
                </div>
                <div className="p-3 bg-purple-900/20 rounded border-l-4 border-purple-500">
                  <strong>Technical Architecture:</strong> Claude + Vision Pro + Cloud Infrastructure
                </div>
                <div className="p-3 bg-amber-900/20 rounded border-l-4 border-amber-500">
                  <strong>Next Actions:</strong> Prototype development, market validation, NVIDIA partnership
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-slate-900/30 rounded-2xl border border-slate-700/30">
            <h2 className="text-xl font-bold mb-4 text-blue-300">Technical Stack</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">AI Model:</span> 
                <span className="text-blue-300">Claude 3.5 Sonnet</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Voice:</span> 
                <span className="text-blue-300">ElevenLabs TTS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Backend:</span> 
                <span className="text-blue-300">Node.js, WebSocket</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Agent Type:</span> 
                <span className="text-blue-300">{isLegacyAgent ? 'Legacy' : 'Cloud'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Status:</span> 
                <span className="text-green-400">Production Ready</span>
              </div>
            </div>
          </div>
          
          <div className="p-8 bg-slate-900/30 rounded-2xl border border-slate-700/30">
            <h2 className="text-xl font-bold mb-4 text-cyan-300">Performance Metrics</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Processing Speed</span>
                  <span>{isCloudAgent ? '95%' : '87%'}</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className={`h-2 rounded-full ${isCloudAgent ? 'w-[95%] bg-cyan-500' : 'w-[87%] bg-amber-500'}`}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Accuracy Rate</span>
                  <span>92%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full w-[92%]"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>System Uptime</span>
                  <span>99.7%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full w-[99.7%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}