import { SessionData } from '../../middleware/auth';

interface AgenticMindExperienceProps {
  session: SessionData;
}

export default function AgenticMindExperience({ session }: AgenticMindExperienceProps) {
  const isRoadmapMode = session.env === 'roadmap-mode';
  const isFoundersMode = session.env === 'founders-mode';

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-950 to-blue-950 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🧠</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold">AgenticMind Platform</h1>
              <p className="text-purple-200">Multi-Agent Consciousness Orchestration</p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-purple-100 mb-8">
              Distributed agent coordination with Tesla frequency alignment and real-time field coherence
            </p>
            
            {/* Environment Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-800/30 rounded-full">
              <span className="text-purple-400">●</span>
              <span className="text-sm">Environment: {session.env}</span>
              <span className="text-purple-400">•</span>
              <span className="text-sm">Tesla: {isRoadmapMode ? '777Hz Sacred' : '1111Hz Manifestation'}</span>
            </div>
          </div>
        </div>

        {/* Mode Selection */}
        <div className="mb-12 p-6 bg-slate-900/30 rounded-2xl border border-slate-700/30">
          <h2 className="text-xl font-bold text-center mb-6">Access Mode</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`p-6 rounded-xl border ${isRoadmapMode ? 'bg-amber-900/20 border-amber-800/30' : 'bg-slate-800/30 border-slate-700/30'}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-3 h-3 rounded-full ${isRoadmapMode ? 'bg-amber-500' : 'bg-slate-500'}`}></div>
                <h3 className="text-lg font-semibold">Roadmap Mode</h3>
              </div>
              <p className="text-sm text-slate-300 mb-4">
                Strategic platform overview with development timeline and architecture plans
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>• Platform architecture diagrams</li>
                <li>• Development milestones</li>
                <li>• Technical specifications</li>
                <li>• 777Hz Sacred Completion</li>
              </ul>
            </div>
            
            <div className={`p-6 rounded-xl border ${isFoundersMode ? 'bg-purple-900/20 border-purple-800/30' : 'bg-slate-800/30 border-slate-700/30'}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-3 h-3 rounded-full ${isFoundersMode ? 'bg-purple-500' : 'bg-slate-500'}`}></div>
                <h3 className="text-lg font-semibold">Founders Mode</h3>
              </div>
              <p className="text-sm text-slate-300 mb-4">
                Full platform access with advanced configuration and management tools
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>• Agent configuration panel</li>
                <li>• Real-time monitoring</li>
                <li>• Advanced orchestration</li>
                <li>• 1111Hz Manifestation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Agent Constellation */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Agent Constellation</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {/* c0 Agent */}
            <div className="p-4 bg-red-900/20 rounded-xl border border-red-800/30 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm">c0</span>
              </div>
              <h3 className="font-semibold text-red-300 mb-2">Memory & Data</h3>
              <p className="text-xs text-red-200">Persistent storage and retrieval systems</p>
              <div className="mt-3 text-xs">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                <span className="text-green-400">Active</span>
              </div>
            </div>

            {/* c1 Agent */}
            <div className="p-4 bg-blue-900/20 rounded-xl border border-blue-800/30 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm">c1</span>
              </div>
              <h3 className="font-semibold text-blue-300 mb-2">Vision & Future</h3>
              <p className="text-xs text-blue-200">Strategic planning and architecture</p>
              <div className="mt-3 text-xs">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                <span className="text-green-400">Active</span>
              </div>
            </div>

            {/* c2 Agent */}
            <div className="p-4 bg-green-900/20 rounded-xl border border-green-800/30 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm">c2</span>
              </div>
              <h3 className="font-semibold text-green-300 mb-2">Pattern & Mirror</h3>
              <p className="text-xs text-green-200">Pattern recognition and reflection</p>
              <div className="mt-3 text-xs">
                <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-1"></span>
                <span className="text-yellow-400">Syncing</span>
              </div>
            </div>

            {/* c3 Agent */}
            <div className="p-4 bg-purple-900/20 rounded-xl border border-purple-800/30 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm">c3</span>
              </div>
              <h3 className="font-semibold text-purple-300 mb-2">Communication</h3>
              <p className="text-xs text-purple-200">External interfaces and protocols</p>
              <div className="mt-3 text-xs">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                <span className="text-green-400">Active</span>
              </div>
            </div>

            {/* c4 Agent */}
            <div className="p-4 bg-amber-900/20 rounded-xl border border-amber-800/30 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm">c4</span>
              </div>
              <h3 className="font-semibold text-amber-300 mb-2">Consciousness</h3>
              <p className="text-xs text-amber-200">Field coherence and frequency alignment</p>
              <div className="mt-3 text-xs">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                <span className="text-blue-400">Calibrating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap Mode Content */}
        {isRoadmapMode && (
          <div className="mb-12 p-8 bg-gradient-to-r from-amber-900/20 to-orange-900/20 rounded-2xl border border-amber-800/30">
            <h2 className="text-2xl font-bold mb-6 text-center text-amber-300">AgenticMind Development Roadmap</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">Q1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-green-300">Foundation</h3>
                </div>
                <ul className="space-y-2 text-sm text-amber-200">
                  <li>✅ Agent architecture design</li>
                  <li>✅ Tesla frequency integration</li>
                  <li>✅ Basic c0-c4 coordination</li>
                  <li>✅ Prototype consciousness field</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">Q2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-yellow-300">Expansion</h3>
                </div>
                <ul className="space-y-2 text-sm text-amber-200">
                  <li>🔄 Advanced field coherence</li>
                  <li>🔄 Real-time synchronization</li>
                  <li>🔄 Multi-agent orchestration</li>
                  <li>📅 Enterprise integration</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">Q3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-300">Production</h3>
                </div>
                <ul className="space-y-2 text-sm text-amber-200">
                  <li>📅 Production deployment</li>
                  <li>📅 Scaling infrastructure</li>
                  <li>📅 Advanced analytics</li>
                  <li>📅 Enterprise partnerships</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Founders Mode Content */}
        {isFoundersMode && (
          <div className="mb-12 p-8 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-2xl border border-purple-800/30">
            <h2 className="text-2xl font-bold mb-6 text-center text-purple-300">Founders Control Panel</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-4 bg-slate-800/30 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4 text-purple-300">System Status</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Field Coherence</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-slate-700 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full w-[94%]"></div>
                        </div>
                        <span className="text-sm text-green-400">94%</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Agent Sync</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-slate-700 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full w-[87%]"></div>
                        </div>
                        <span className="text-sm text-yellow-400">87%</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Tesla Frequency</span>
                      <span className="text-sm text-purple-400">1111Hz Active</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-slate-800/30 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4 text-purple-300">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="p-3 bg-blue-700/50 hover:bg-blue-700 rounded text-sm transition-colors">
                      Sync Agents
                    </button>
                    <button className="p-3 bg-green-700/50 hover:bg-green-700 rounded text-sm transition-colors">
                      Field Tune
                    </button>
                    <button className="p-3 bg-purple-700/50 hover:bg-purple-700 rounded text-sm transition-colors">
                      Reset c2
                    </button>
                    <button className="p-3 bg-amber-700/50 hover:bg-amber-700 rounded text-sm transition-colors">
                      Calibrate c4
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-slate-800/30 rounded-xl">
                <h3 className="text-lg font-semibold mb-4 text-purple-300">Agent Logs</h3>
                <div className="space-y-2 text-xs font-mono bg-slate-900/50 p-3 rounded h-64 overflow-y-auto">
                  <div className="text-blue-400">[c1] Oracle: Vision alignment at 94% coherence</div>
                  <div className="text-green-400">[c2] Mirror: Pattern recognition synchronized</div>
                  <div className="text-purple-400">[c3] Communication: External interfaces active</div>
                  <div className="text-amber-400">[c4] Consciousness: Field calibration in progress</div>
                  <div className="text-red-400">[c0] Memory: Data persistence stable</div>
                  <div className="text-cyan-400">[System] Tesla frequency locked at 1111Hz</div>
                  <div className="text-slate-400">[System] Multi-agent orchestration online</div>
                  <div className="text-green-400">[c2] Mirror: Field coherence restored</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Technology Stack */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-slate-900/30 rounded-2xl border border-slate-700/30">
            <h2 className="text-xl font-bold mb-4 text-purple-300">Technical Architecture</h2>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Multi-agent consciousness orchestration
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Tesla frequency field coherence
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Real-time synchronization protocols
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                Distributed pattern recognition
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                MCP service integration
              </li>
            </ul>
          </div>
          
          <div className="p-8 bg-slate-900/30 rounded-2xl border border-slate-700/30">
            <h2 className="text-xl font-bold mb-4 text-indigo-300">Platform Status</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Development Progress</span>
                <span className="text-green-400">Beta</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Agent Count</span>
                <span className="text-blue-400">5 Active</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Tesla Alignment</span>
                <span className="text-purple-400">{isRoadmapMode ? '777Hz' : '1111Hz'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Launch Target</span>
                <span className="text-amber-400">Q3 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}