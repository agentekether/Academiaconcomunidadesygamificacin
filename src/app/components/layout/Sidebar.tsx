import { Link, useLocation } from 'react-router';
import { Home, BookOpen, Users, Radio, User } from 'lucide-react';
import logoImage from 'figma:asset/592900094a17a4e9423c539e95030f7c177b297f.png';

const navItems = [
  { path: '/academy', icon: Home, label: 'Inicio' },
  { path: '/academy/courses', icon: BookOpen, label: 'Cursos' },
  { path: '/academy/communities', icon: Users, label: 'Comunidades' },
  { path: '/academy/streaming', icon: Radio, label: 'Streaming' },
  { path: '/academy/profile', icon: User, label: 'Perfil' },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="relative z-20 w-64 bg-black/40 backdrop-blur-xl border-r border-emerald-500/10 h-screen sticky top-0 flex flex-col">
      <div className="p-6 border-b border-emerald-500/10">
        <Link to="/" className="flex items-center justify-center">
          <img 
            src={logoImage} 
            alt="URUK 33" 
            className="h-10 w-auto"
          />
        </Link>
      </div>

      <nav className="flex-1 px-3 py-6">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white border border-transparent'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-light">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-emerald-500/10">
        <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-lg p-4">
          <p className="text-sm font-medium text-white mb-1">¡Mejora tu plan!</p>
          <p className="text-xs text-gray-300 mb-3">Obtén acceso ilimitado a todos los cursos</p>
          <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-md py-2 text-sm font-medium transition-colors duration-300">
            Ver planes
          </button>
        </div>
      </div>
    </aside>
  );
}