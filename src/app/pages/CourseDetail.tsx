import { useParams, Link } from 'react-router';
import { ArrowLeft, Play, Lock, CheckCircle, Clock, Award } from 'lucide-react';
import { courses, lessons } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';

export function CourseDetail() {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);
  const courseLessons = lessons.filter(l => l.courseId === id);

  if (!course) {
    return (
      <div className="p-6">
        <p>Curso no encontrado</p>
      </div>
    );
  }

  const completedLessons = courseLessons.filter(l => l.completed).length;
  const totalLessons = courseLessons.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link to="/courses" className="inline-flex items-center gap-2 text-white hover:text-gray-200 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Volver a cursos
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg mb-4 opacity-90">{course.description}</p>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <img src={course.instructorAvatar} alt={course.instructor} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="font-medium">{course.instructor}</p>
                    <p className="text-sm opacity-80">Instructor</p>
                  </div>
                </div>
                <div className="border-l border-white border-opacity-30 pl-6">
                  <p className="font-medium">{course.level}</p>
                  <p className="text-sm opacity-80">Nivel</p>
                </div>
                <div className="border-l border-white border-opacity-30 pl-6">
                  <p className="font-medium">{course.duration}</p>
                  <p className="text-sm opacity-80">Duración</p>
                </div>
              </div>

              {course.progress > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Tu progreso</span>
                    <span className="text-sm font-medium">{completedLessons} / {totalLessons} lecciones</span>
                  </div>
                  <Progress value={course.progress} className="h-2 bg-white bg-opacity-20" />
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 text-gray-800 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-purple-600">+{course.xpReward} XP</span>
                  <Award className="w-8 h-8 text-yellow-500" />
                </div>
                <p className="text-sm text-gray-600 mb-4">Gana XP completando este curso</p>
                {course.progress === 0 ? (
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Comenzar curso
                  </Button>
                ) : (
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Continuar aprendiendo
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold">Contenido del curso</h2>
            <p className="text-sm text-gray-600 mt-1">
              {totalLessons} lecciones • {course.duration} total
            </p>
          </div>

          <div className="divide-y divide-gray-200">
            {courseLessons.map((lesson, index) => {
              const Icon = lesson.completed ? CheckCircle : lesson.locked ? Lock : Play;
              const iconColor = lesson.completed ? 'text-green-500' : lesson.locked ? 'text-gray-400' : 'text-purple-600';
              
              return (
                <button
                  key={lesson.id}
                  disabled={lesson.locked}
                  className={`w-full px-6 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors ${
                    lesson.locked ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center ${iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium">
                        {index + 1}. {lesson.title}
                      </h3>
                      {lesson.type === 'quiz' && (
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">Quiz</span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {lesson.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        +{lesson.xpReward} XP
                      </span>
                    </div>
                  </div>

                  {lesson.completed && (
                    <span className="text-sm text-green-600 font-medium">Completado</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
