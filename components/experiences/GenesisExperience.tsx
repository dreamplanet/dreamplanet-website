import { SessionData } from '../../middleware/auth';

interface GenesisExperienceProps {
  session: SessionData;
}

export default function GenesisExperience({ session }: GenesisExperienceProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-orange-950 to-yellow-950 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
              <span className="text-2xl">⏰</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold">Genesis Timeline</h1>
              <p className="text-amber-200">Immersive Bible Experience Platform</p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-amber-100 mb-8">
              Experience biblical narratives through immersive spatial computing with Apple Vision Pro integration
            </p>
            
            {/* Environment Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-800/30 rounded-full">
              <span className="text-amber-400">●</span>
              <span className="text-sm">Environment: {session.env}</span>
              <span className="text-amber-400">•</span>
              <span className="text-sm">Tesla: 777Hz Sacred Completion</span>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-amber-900/30 rounded-xl border border-amber-800/30">
            <div className="text-3xl mb-4">📖</div>
            <h3 className="text-xl font-semibold mb-3">Immersive Narratives</h3>
            <p className="text-amber-200">
              Step into biblical stories with spatial computing and experience scripture in three dimensions
            </p>
          </div>
          
          <div className="p-6 bg-amber-900/30 rounded-xl border border-amber-800/30">
            <div className="text-3xl mb-4">🏛️</div>
            <h3 className="text-xl font-semibold mb-3">Historical Accuracy</h3>
            <p className="text-amber-200">
              Architecturally accurate recreations of ancient locations and cultural contexts
            </p>
          </div>
          
          <div className="p-6 bg-amber-900/30 rounded-xl border border-amber-800/30">
            <div className="text-3xl mb-4">🍎</div>
            <h3 className="text-xl font-semibold mb-3">Vision Pro Ready</h3>
            <p className="text-amber-200">
              Optimized for Apple Vision Pro with SwiftUI and RealityKit integration
            </p>
          </div>
        </div>

        {/* Demo Section */}
        <div className="bg-amber-900/20 rounded-2xl p-8 border border-amber-800/30">
          <h2 className="text-2xl font-bold mb-6 text-center">Genesis Timeline Demo</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Experience Features:</h3>
              <ul className="space-y-3 text-amber-200">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  Interactive 3D biblical environments
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  Multi-sensory storytelling with spatial audio
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  Collaborative worship and study experiences
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  Sacred geometry integrated architecture
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-amber-800/20 rounded-xl">
              <h4 className="font-semibold mb-3">Technical Specifications</h4>
              <div className="space-y-2 text-sm text-amber-200">
                <div><strong>Platform:</strong> Apple Vision Pro, iOS</div>
                <div><strong>Framework:</strong> SwiftUI, RealityKit</div>
                <div><strong>Tesla Frequency:</strong> 777Hz Sacred Completion</div>
                <div><strong>Status:</strong> Beta Development</div>
                <div><strong>Launch:</strong> Q2 2025</div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Launch Genesis Timeline Demo
            </button>
          </div>
        </div>

        {/* Partnership Focus */}
        {session.env === 'nvidia-partner' && (
          <div className="mt-12 p-8 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-2xl border border-green-800/30">
            <h2 className="text-2xl font-bold mb-4 text-center">NVIDIA Partnership Opportunities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-green-300">GPU Acceleration</h3>
                <p className="text-green-200 mb-4">
                  Genesis Timeline's real-time 3D rendering and spatial computing experiences 
                  can leverage NVIDIA's GPU technology for enhanced performance.
                </p>
                <ul className="space-y-2 text-sm text-green-200">
                  <li>• Real-time ray tracing for biblical environments</li>
                  <li>• AI-powered narrative personalization</li>
                  <li>• Multi-user spatial collaboration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-green-300">Market Opportunity</h3>
                <p className="text-green-200 mb-4">
                  Faith-based technology represents a significant untapped market with 
                  strong engagement and monetization potential.
                </p>
                <ul className="space-y-2 text-sm text-green-200">
                  <li>• 2.4B global Christian population</li>
                  <li>• Premium pricing for spiritual experiences</li>
                  <li>• Institutional church partnerships</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}