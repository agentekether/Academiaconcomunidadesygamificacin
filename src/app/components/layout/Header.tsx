import { Bell, Search } from 'lucide-react';
import { currentUser } from '../../data/mockData';
import { LevelProgress } from '../LevelProgress';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';

export function Header() {
  return (
    <header className="relative z-20 bg-black/30 backdrop-blur-xl border-b border-emerald-500/10 sticky top-0">
      <div className="px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar cursos, comunidades..."
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-emerald-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 text-white placeholder:text-gray-400 transition-all duration-300"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <LevelProgress
            level={currentUser.level}
            xp={currentUser.xp}
            xpToNextLevel={currentUser.xpToNextLevel}
            size="sm"
          />

          <button className="relative p-2 text-gray-300 hover:bg-white/5 hover:text-emerald-400 rounded-lg transition-all duration-300">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full"></span>
          </button>

          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
              <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="hidden lg:block">
              <p className="text-sm font-medium text-white">{currentUser.name}</p>
              <p className="text-xs text-emerald-400">{currentUser.points.toLocaleString()} puntos</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}