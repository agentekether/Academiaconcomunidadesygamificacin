import { TrendingUp, BookOpen, Users, Zap, Award } from 'lucide-react';
import { courses, communities, streams, currentUser } from '../data/mockData';
import { CourseCard } from '../components/CourseCard';
import { StreamCard } from '../components/StreamCard';
import { Link } from 'react-router';

export function Dashboard() {
  const continueCourses = courses.filter(c => c.progress > 0 && c.progress < 100);
  const liveStreams = streams.filter(s => s.isLive);
  const myCommunities = communities.filter(c => c.isJoined);

  const stats = [
    { icon: BookOpen, label: 'Cursos activos', value: continueCourses.length, color: 'bg-emerald-500' },
    { icon: Users, label: 'Comunidades', value: myCommunities.length, color: 'bg-emerald-600' },
    { icon: TrendingUp, label: 'Racha de días', value: 7, color: 'bg-emerald-500' },
    { icon: Award, label: 'Insignias', value: currentUser.badges.length, color: 'bg-emerald-600' },
  ];

  return (
    <div className="relative p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2 text-white">¡Bienvenido de nuevo, {currentUser.name.split(' ')[0]}! 👋</h1>
        <p className="text-gray-300">Continúa tu aprendizaje y alcanza nuevos niveles</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-black/40 backdrop-blur-sm rounded-xl p-5 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">{stat.value}</span>
              </div>
              <p className="text-sm text-gray-300">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {continueCourses.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Continuar aprendiendo</h2>
            <Link to="/academy/courses" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors duration-300">
              Ver todos los cursos →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {continueCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      )}

      {liveStreams.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-white">Streams en vivo</h2>
              <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
            </div>
            <Link to="/academy/streaming" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors duration-300">
              Ver todos →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveStreams.map(stream => (
              <StreamCard key={stream.id} stream={stream} />
            ))}
          </div>
        </div>
      )}

      <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30 backdrop-blur-sm rounded-xl p-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-6 h-6 text-emerald-400" />
              <h3 className="text-2xl font-bold text-white">¡Sigue así!</h3>
            </div>
            <p className="mb-4 text-gray-300">Completa 3 lecciones más para alcanzar el Nivel {currentUser.level + 1}</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 max-w-xs bg-white/10 rounded-full h-3">
                <div 
                  className="bg-emerald-400 rounded-full h-3 transition-all duration-500"
                  style={{ width: `${(currentUser.xp / currentUser.xpToNextLevel) * 100}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-white">
                {currentUser.xp.toLocaleString()} / {currentUser.xpToNextLevel.toLocaleString()} XP
              </span>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="w-32 h-32 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
              <Award className="w-16 h-16 text-emerald-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}