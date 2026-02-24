import { createBrowserRouter } from 'react-router';
import { RootLayout } from './layout/RootLayout';
import { Dashboard } from './pages/Dashboard';
import { Courses } from './pages/Courses';
import { CourseDetail } from './pages/CourseDetail';
import { Communities } from './pages/Communities';
import { CommunityDetail } from './pages/CommunityDetail';
import { Streaming } from './pages/Streaming';
import { Profile } from './pages/Profile';
import { URUK33 } from './pages/URUK33';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: URUK33,
  },
  {
    path: '/academy',
    Component: RootLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: 'courses', Component: Courses },
      { path: 'courses/:id', Component: CourseDetail },
      { path: 'communities', Component: Communities },
      { path: 'communities/:id', Component: CommunityDetail },
      { path: 'streaming', Component: Streaming },
      { path: 'streaming/:id', Component: Streaming },
      { path: 'profile', Component: Profile },
    ],
  },
]);