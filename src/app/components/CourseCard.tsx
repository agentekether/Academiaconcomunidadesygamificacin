import { Clock, Users, BookOpen, Award } from 'lucide-react';
import { Link } from 'react-router';
import { Course } from '../data/mockData';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const levelColors = {
    'Principiante': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    'Intermedio': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'Avanzado': 'bg-red-500/20 text-red-400 border-red-500/30',
  };

  return (
    <Link to={`/academy/courses/${course.id}`} className="block">
      <div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden hover:border-emerald-500/40 transition-all duration-300 border border-emerald-500/20">
        <div className="relative">
          <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover" />
          <Badge className={`absolute top-3 right-3 ${levelColors[course.level]} border`}>
            {course.level}
          </Badge>
          {course.progress > 0 && (
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2">
              <Progress value={course.progress} className="h-1" />
            </div>
          )}
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <img src={course.instructorAvatar} alt={course.instructor} className="w-6 h-6 rounded-full" />
            <span className="text-xs text-gray-300">{course.instructor}</span>
          </div>

          <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-white">{course.title}</h3>
          <p className="text-sm text-gray-300 mb-4 line-clamp-2">{course.description}</p>

          <div className="flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {course.duration}
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                {course.lessons} lecciones
              </span>
            </div>
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <Award className="w-4 h-4" />
              +{course.xpReward} XP
            </span>
          </div>

          {course.progress > 0 && (
            <div className="mt-3 pt-3 border-t border-emerald-500/20">
              <span className="text-sm font-medium text-emerald-400">{course.progress}% completado</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}