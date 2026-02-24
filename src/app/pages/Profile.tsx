import { Calendar, Award, TrendingUp, BookOpen, Users, Star } from 'lucide-react';
import { currentUser, courses } from '../data/mockData';
import { LevelProgress } from '../components/LevelProgress';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Progress } from '../components/ui/progress';

export function Profile() {
  const completedCourses = courses.filter(c => c.progress === 100).length;
  const inProgressCourses = courses.filter(c => c.progress > 0 && c.progress < 100).length;
  const totalCoursesEnrolled = courses.filter(c => c.progress > 0).length;

  const stats = [
    { icon: BookOpen, label: 'Cursos completados', value: completedCourses, color: 'text-blue-500' },
    { icon: TrendingUp, label: 'Cursos en progreso', value: inProgressCourses, color: 'text-green-500' },
    { icon: Users, label: 'Comunidades', value: 2, color: 'text-purple-500' },
    { icon: Star, label: 'Puntos totales', value: currentUser.points.toLocaleString(), color: 'text-yellow-500' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                  <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold mb-1">{currentUser.name}</h2>
                <p className="text-gray-600 mb-4">{currentUser.email}</p>
                
                <div className="w-full">
                  <LevelProgress
                    level={currentUser.level}
                    xp={currentUser.xp}
                    xpToNextLevel={currentUser.xpToNextLevel}
                    size="lg"
                  />
                </div>

                <div className="w-full mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Miembro desde {new Date(currentUser.joinedDate).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Insignias
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {currentUser.badges.map(badge => (
                  <div key={badge.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="text-2xl">{badge.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm">{badge.name}</h4>
                      <p className="text-xs text-gray-600">{badge.description}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {new Date(badge.earnedDate).toLocaleDateString('es-ES')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Estadísticas de aprendizaje</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Icon className={`w-5 h-5 ${stat.color}`} />
                        <span className="text-2xl font-bold">{stat.value}</span>
                      </div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Progreso de cursos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {courses.filter(c => c.progress > 0).map(course => (
                  <div key={course.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start gap-3 mb-3">
                      <img src={course.thumbnail} alt={course.title} className="w-16 h-16 rounded-lg object-cover" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold mb-1">{course.title}</h4>
                        <p className="text-xs text-gray-600 mb-2">{course.instructor}</p>
                        <div className="flex items-center gap-2">
                          <Progress value={course.progress} className="flex-1 h-2" />
                          <span className="text-sm font-medium text-gray-700">{course.progress}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {totalCoursesEnrolled === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <BookOpen className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                    <p>Aún no has comenzado ningún curso</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Actividad reciente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Insignia desbloqueada: Racha 7 días</p>
                    <p className="text-xs text-gray-600">Hace 2 horas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Lección completada: Fundamentos de HTML</p>
                    <p className="text-xs text-gray-600">Hace 5 horas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Te uniste a Desarrolladores Web</p>
                    <p className="text-xs text-gray-600">Hace 1 día</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
