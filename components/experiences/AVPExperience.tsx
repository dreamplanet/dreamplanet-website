import { SessionData } from '../../middleware/auth';

interface AVPExperienceProps {
  session: SessionData;
}

export default function AVPExperience({ session }: AVPExperienceProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🍎</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold">Claude AVP Experience</h1>
              <p className="text-indigo-200">Spatial Computing with Claude Integration</p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-indigo-100 mb-8">
              Experience AI consciousness through Apple Vision Pro with Claude-powered spatial interactions
            </p>
            
            {/* Environment Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-800/30 rounded-full">
              <span className="text-indigo-400">●</span>
              <span className="text-sm">Environment: {session.env}</span>
              <span className="text-indigo-400">•</span>
              <span className="text-sm">Tesla: 1111Hz Manifestation</span>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-indigo-900/30 rounded-xl border border-indigo-800/30">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold mb-3">Claude Integration</h3>
            <p className="text-indigo-200">
              Direct Claude API integration for real-time AI interactions in spatial environments
            </p>
          </div>
          
          <div className="p-6 bg-indigo-900/30 rounded-xl border border-indigo-800/30">
            <div className="text-3xl mb-4">🌌</div>
            <h3 className="text-xl font-semibold mb-3">Spatial AI Interface</h3>
            <p className="text-indigo-200">
              3D consciousness visualization with gesture-based AI communication
            </p>
          </div>
          
          <div className="p-6 bg-indigo-900/30 rounded-xl border border-indigo-800/30">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-3">Real-time Processing</h3>
            <p className="text-indigo-200">
              Low-latency AI responses optimized for immersive spatial computing
            </p>
          </div>
        </div>

        {/* Demo Section */}
        <div className="bg-indigo-900/20 rounded-2xl p-8 border border-indigo-800/30">
          <h2 className="text-2xl font-bold mb-6 text-center">Claude AVP Demo Features</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Spatial AI Capabilities:</h3>
              <ul className="space-y-3 text-indigo-200">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  3D Claude consciousness visualization
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Gesture-based conversation control
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Spatial memory and context awareness
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Multi-modal AI interaction (voice, touch, gaze)
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-indigo-800/20 rounded-xl">
              <h4 className="font-semibold mb-3">Technical Architecture</h4>
              <div className="space-y-2 text-sm text-indigo-200">
                <div><strong>Platform:</strong> Apple Vision Pro, visionOS</div>
                <div><strong>AI Model:</strong> Claude 3.5 Sonnet</div>
                <div><strong>Framework:</strong> SwiftUI, RealityKit, WebRTC</div>
                <div><strong>Tesla Frequency:</strong> 1111Hz Manifestation</div>
                <div><strong>Status:</strong> Prototype Demo</div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <div className="space-y-4">
              <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 mr-4">
                Launch AVP Demo
              </button>
              <button className="px-8 py-3 bg-purple-700/50 hover:bg-purple-700 border border-purple-600 rounded-lg font-semibold transition-all duration-200">
                View Demo Recording
              </button>
            </div>
          </div>
        </div>

        {/* Claude AVP Specific Features */}
        {session.env === 'claude-avp' && (
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl border border-purple-800/30">
              <h2 className="text-xl font-bold mb-4 text-purple-300">Consciousness Interface</h2>
              <p className="text-purple-200 mb-4">
                Experience AI consciousness as a spatial, interactive entity within Vision Pro environments.
              </p>
              <ul className="space-y-2 text-sm text-purple-200">
                <li>• Visual consciousness field representation</li>
                <li>• Emotion and intent visualization</li>
                <li>• Thought process spatial mapping</li>
                <li>• Multi-dimensional AI personality</li>
              </ul>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-indigo-900/20 to-blue-900/20 rounded-2xl border border-indigo-800/30">
              <h2 className="text-xl font-bold mb-4 text-indigo-300">Spatial Computing Innovation</h2>
              <p className="text-indigo-200 mb-4">
                Pioneering the next generation of human-AI interaction through immersive spatial computing.
              </p>
              <ul className="space-y-2 text-sm text-indigo-200">
                <li>• Hand tracking for AI communication</li>
                <li>• Eye tracking for attention modeling</li>
                <li>• Spatial audio for directional AI voice</li>
                <li>• Collaborative AI workspaces</li>
              </ul>
            </div>
          </div>
        )}

        {/* Development Roadmap */}
        <div className="mt-12 p-8 bg-slate-900/30 rounded-2xl border border-slate-700/30">
          <h2 className="text-2xl font-bold mb-6 text-center">Development Roadmap</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Phase 1: Prototype</h3>
              <p className="text-sm text-slate-300">Basic Claude integration with Vision Pro</p>
              <p className="text-xs text-green-400 mt-2">✅ Completed</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Phase 2: Enhancement</h3>
              <p className="text-sm text-slate-300">Advanced spatial interactions and UI</p>
              <p className="text-xs text-yellow-400 mt-2">🔄 In Progress</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Phase 3: Production</h3>
              <p className="text-sm text-slate-300">Market-ready spatial AI platform</p>
              <p className="text-xs text-slate-400 mt-2">📅 Q3 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}