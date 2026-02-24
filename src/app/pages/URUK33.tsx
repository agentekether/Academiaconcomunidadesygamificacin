import { HolographicCity } from '../components/HolographicCity';
import { ChevronRight, Shield, Zap, Target } from 'lucide-react';
import { Link } from 'react-router';
import logoImage from 'figma:asset/592900094a17a4e9423c539e95030f7c177b297f.png';

export function URUK33() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <HolographicCity />
      
      {/* Content Layer */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12 flex justify-center">
              <img 
                src={logoImage} 
                alt="URUK 33" 
                className="h-20 md:h-28 w-auto"
              />
            </div>
            
            <div className="mb-8">
              <div className="inline-block px-4 py-2 border border-emerald-500/30 bg-black/40 backdrop-blur-sm rounded-full mb-6">
                <span className="text-emerald-400 text-sm tracking-wider font-light">
                  DIGITAL CIVILIZATION PROTOCOL
                </span>
              </div>
            </div>
            
            <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-12 max-w-2xl mx-auto">
              A strategic digital capital built on architectural precision and elite systems thinking.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/academy">
                <button className="group px-8 py-4 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 text-white rounded-lg transition-all duration-300 flex items-center gap-2">
                  <span className="tracking-wide">Enter the System</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
              
              <button className="px-8 py-4 bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/10 hover:border-white/20 text-white rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
                Strategic Infrastructure
              </h2>
              <p className="text-gray-200 text-lg font-light">
                Built for precision, designed for elite operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-black/40 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/40 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-[1.02]"
                >
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-emerald-500/40 rounded-tl-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-emerald-500/40 rounded-br-2xl"></div>
                  
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors duration-300">
                      <feature.icon className="w-7 h-7 text-emerald-400" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-light text-white mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-200 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-black/40 backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-12 md:p-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-3 py-1 border border-emerald-500/30 bg-emerald-500/10 rounded-full mb-6">
                    <span className="text-emerald-400 text-xs tracking-widest font-light">
                      SYSTEM CORE
                    </span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                    Architectural Excellence
                  </h2>
                  
                  <p className="text-gray-200 text-lg font-light leading-relaxed mb-8">
                    Every component, every line, every decision—designed with strategic intention. 
                    URUK33 represents the convergence of digital architecture and systems thinking.
                  </p>

                  <div className="space-y-4">
                    {specs.map((spec, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span className="text-gray-100 font-light">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-2xl p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-7xl font-extralight text-emerald-400 mb-4">33</div>
                      <div className="text-gray-400 tracking-widest text-sm">PROTOCOL</div>
                    </div>
                  </div>
                  
                  {/* Floating data points */}
                  <div className="absolute -top-6 -right-6 bg-black/60 backdrop-blur-sm border border-emerald-500/30 rounded-xl px-4 py-3">
                    <div className="text-emerald-400 text-2xl font-light">99.9%</div>
                    <div className="text-gray-400 text-xs tracking-wide">Precision</div>
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 bg-black/60 backdrop-blur-sm border border-emerald-500/30 rounded-xl px-4 py-3">
                    <div className="text-emerald-400 text-2xl font-light">Elite</div>
                    <div className="text-gray-400 text-xs tracking-wide">Access</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
              Join the Digital Capital
            </h2>
            
            <p className="text-xl text-gray-200 font-light mb-12 max-w-2xl mx-auto">
              Access is granted to those who understand the value of strategic systems.
            </p>

            <button className="group px-10 py-5 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 text-white rounded-xl transition-all duration-300 text-lg flex items-center gap-3 mx-auto">
              <span className="tracking-wide">Request Access</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-emerald-500/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-2xl font-light tracking-tight">
              URUK<span className="text-emerald-400">33</span>
            </div>
            
            <div className="text-gray-500 text-sm font-light">
              © 2026 URUK33. Digital Civilization Protocol.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

const features = [
  {
    icon: Shield,
    title: 'Strategic Security',
    description: 'Military-grade encryption and architectural security patterns designed for elite operations.',
  },
  {
    icon: Zap,
    title: 'Peak Performance',
    description: 'Optimized infrastructure built on precision engineering and systems optimization.',
  },
  {
    icon: Target,
    title: 'Tactical Precision',
    description: 'Every component designed with strategic intention and architectural excellence.',
  },
];

const specs = [
  'Geometric architecture patterns',
  'Structured grid systems',
  'Code-level precision',
  'Elite access protocols',
  'Strategic command interface',
];