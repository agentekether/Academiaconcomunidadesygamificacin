import { Trophy } from 'lucide-react';
import { Progress } from './ui/progress';

interface LevelProgressProps {
  level: number;
  xp: number;
  xpToNextLevel: number;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function LevelProgress({ level, xp, xpToNextLevel, showLabel = true, size = 'md' }: LevelProgressProps) {
  const progress = (xp / xpToNextLevel) * 100;
  
  const sizeClasses = {
    sm: 'w-20 h-20 text-xs',
    md: 'w-24 h-24 text-sm',
    lg: 'w-32 h-32 text-base',
  };

  return (
    <div className="flex items-center gap-4">
      <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg border-2 border-emerald-300`}>
        <div className="flex flex-col items-center">
          <Trophy className="w-6 h-6 text-white mb-1" />
          <span className="font-bold text-white">{level}</span>
        </div>
      </div>
      {showLabel && (
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium text-white">Nivel {level}</span>
            <span className="text-xs text-gray-300">{xp.toLocaleString()} / {xpToNextLevel.toLocaleString()} XP</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      )}
    </div>
  );
}