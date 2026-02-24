// Mock data for the platform

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  level: number;
  xp: number;
  xpToNextLevel: number;
  points: number;
  badges: Badge[];
  joinedDate: string;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  earnedDate: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructorAvatar: string;
  thumbnail: string;
  duration: string;
  lessons: number;
  enrolled: number;
  progress: number;
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
  category: string;
  xpReward: number;
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  duration: string;
  completed: boolean;
  locked: boolean;
  xpReward: number;
  type: 'video' | 'quiz' | 'reading';
}

export interface Community {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  members: number;
  posts: number;
  category: string;
  isJoined: boolean;
}

export interface Post {
  id: string;
  communityId: string;
  author: string;
  authorAvatar: string;
  authorLevel: number;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  isLiked: boolean;
}

export interface Stream {
  id: string;
  title: string;
  streamer: string;
  streamerAvatar: string;
  thumbnail: string;
  viewers: number;
  isLive: boolean;
  startTime: string;
  category: string;
}

export const currentUser: User = {
  id: '1',
  name: 'María García',
  email: 'maria@ejemplo.com',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
  level: 12,
  xp: 3450,
  xpToNextLevel: 5000,
  points: 24850,
  badges: [
    { id: '1', name: 'Primera Lección', icon: '🎓', description: 'Completaste tu primera lección', earnedDate: '2026-01-15' },
    { id: '2', name: 'Colaborador', icon: '💬', description: 'Publicaste en 10 comunidades', earnedDate: '2026-02-01' },
    { id: '3', name: 'Racha 7 días', icon: '🔥', description: 'Mantuviste una racha de 7 días', earnedDate: '2026-02-10' },
  ],
  joinedDate: '2026-01-10',
};

export const courses: Course[] = [
  {
    id: '1',
    title: 'Desarrollo Web Completo',
    description: 'Aprende HTML, CSS, JavaScript y React desde cero hasta nivel avanzado',
    instructor: 'Carlos Ruiz',
    instructorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    duration: '24 horas',
    lessons: 48,
    enrolled: 1250,
    progress: 65,
    level: 'Principiante',
    category: 'Desarrollo',
    xpReward: 500,
  },
  {
    id: '2',
    title: 'Marketing Digital Avanzado',
    description: 'Estrategias de marketing digital, SEO, SEM y redes sociales',
    instructor: 'Ana Martínez',
    instructorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    duration: '16 horas',
    lessons: 32,
    enrolled: 890,
    progress: 30,
    level: 'Intermedio',
    category: 'Marketing',
    xpReward: 400,
  },
  {
    id: '3',
    title: 'Diseño UX/UI Profesional',
    description: 'Crea experiencias digitales increíbles con Figma y principios de diseño',
    instructor: 'Laura Sánchez',
    instructorAvatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    duration: '20 horas',
    lessons: 40,
    enrolled: 1540,
    progress: 0,
    level: 'Intermedio',
    category: 'Diseño',
    xpReward: 450,
  },
  {
    id: '4',
    title: 'Inteligencia Artificial con Python',
    description: 'Machine Learning, Deep Learning y procesamiento de lenguaje natural',
    instructor: 'David López',
    instructorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop',
    duration: '32 horas',
    lessons: 64,
    enrolled: 2100,
    progress: 15,
    level: 'Avanzado',
    category: 'IA',
    xpReward: 800,
  },
];

export const lessons: Lesson[] = [
  // Course 1 lessons
  { id: '1-1', courseId: '1', title: 'Introducción al Desarrollo Web', duration: '15:30', completed: true, locked: false, xpReward: 10, type: 'video' },
  { id: '1-2', courseId: '1', title: 'Fundamentos de HTML', duration: '22:45', completed: true, locked: false, xpReward: 15, type: 'video' },
  { id: '1-3', courseId: '1', title: 'Estilos con CSS', duration: '28:15', completed: true, locked: false, xpReward: 15, type: 'video' },
  { id: '1-4', courseId: '1', title: 'Quiz: HTML y CSS Básico', duration: '10:00', completed: true, locked: false, xpReward: 20, type: 'quiz' },
  { id: '1-5', courseId: '1', title: 'JavaScript Fundamentos', duration: '35:20', completed: false, locked: false, xpReward: 20, type: 'video' },
  { id: '1-6', courseId: '1', title: 'Manipulación del DOM', duration: '30:45', completed: false, locked: false, xpReward: 20, type: 'video' },
  { id: '1-7', courseId: '1', title: 'Proyecto: Página Web Interactiva', duration: '45:00', completed: false, locked: true, xpReward: 50, type: 'video' },
];

export const communities: Community[] = [
  {
    id: '1',
    name: 'Desarrolladores Web',
    description: 'Comunidad para discutir sobre desarrollo web, compartir proyectos y resolver dudas',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    members: 3420,
    posts: 1250,
    category: 'Desarrollo',
    isJoined: true,
  },
  {
    id: '2',
    name: 'Marketing Creativo',
    description: 'Comparte estrategias, casos de éxito y tendencias en marketing digital',
    thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
    members: 2150,
    posts: 890,
    category: 'Marketing',
    isJoined: true,
  },
  {
    id: '3',
    name: 'Diseñadores UX/UI',
    description: 'Feedback de diseños, recursos y mejores prácticas de diseño',
    thumbnail: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop',
    members: 4200,
    posts: 2340,
    category: 'Diseño',
    isJoined: false,
  },
  {
    id: '4',
    name: 'IA y Machine Learning',
    description: 'Explora el mundo de la inteligencia artificial y aprende de los expertos',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    members: 5600,
    posts: 3100,
    category: 'IA',
    isJoined: false,
  },
];

export const posts: Post[] = [
  {
    id: '1',
    communityId: '1',
    author: 'Pedro Jiménez',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    authorLevel: 15,
    content: '¡Acabo de terminar mi proyecto final del curso de React! Es una aplicación de gestión de tareas con autenticación. ¿Alguien quiere darme feedback? 🚀',
    timestamp: 'Hace 2 horas',
    likes: 45,
    comments: 12,
    isLiked: true,
  },
  {
    id: '2',
    communityId: '1',
    author: 'Sofia Torres',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
    authorLevel: 22,
    content: '¿Cuál es la mejor manera de optimizar el rendimiento de una aplicación React con muchos componentes? Estoy teniendo problemas de lag.',
    timestamp: 'Hace 5 horas',
    likes: 28,
    comments: 18,
    isLiked: false,
  },
  {
    id: '3',
    communityId: '1',
    author: 'Miguel Ángel Ruiz',
    authorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
    authorLevel: 18,
    content: 'Recuerden que mañana tenemos el webinar sobre Next.js 15 a las 19:00. ¡No se lo pierdan! 📚',
    timestamp: 'Hace 1 día',
    likes: 92,
    comments: 25,
    isLiked: true,
  },
];

export const streams: Stream[] = [
  {
    id: '1',
    title: 'Construyendo una API REST con Node.js en vivo',
    streamer: 'Carlos Ruiz',
    streamerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
    viewers: 234,
    isLive: true,
    startTime: 'Ahora',
    category: 'Desarrollo',
  },
  {
    id: '2',
    title: 'Estrategias de Growth Marketing para Startups',
    streamer: 'Ana Martínez',
    streamerAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
    viewers: 156,
    isLive: true,
    startTime: 'Ahora',
    category: 'Marketing',
  },
  {
    id: '3',
    title: 'Sesión de diseño: Rediseñando una app móvil',
    streamer: 'Laura Sánchez',
    streamerAvatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
    viewers: 0,
    isLive: false,
    startTime: 'Hoy 20:00',
    category: 'Diseño',
  },
  {
    id: '4',
    title: 'Introducción al Deep Learning con TensorFlow',
    streamer: 'David López',
    streamerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop',
    viewers: 0,
    isLive: false,
    startTime: 'Mañana 18:00',
    category: 'IA',
  },
];

export const levelThresholds = [
  { level: 1, xpRequired: 0 },
  { level: 2, xpRequired: 100 },
  { level: 3, xpRequired: 250 },
  { level: 4, xpRequired: 500 },
  { level: 5, xpRequired: 1000 },
  { level: 10, xpRequired: 5000 },
  { level: 15, xpRequired: 12000 },
  { level: 20, xpRequired: 25000 },
  { level: 25, xpRequired: 50000 },
];
