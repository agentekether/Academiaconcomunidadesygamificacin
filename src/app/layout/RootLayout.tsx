import { Outlet } from 'react-router';
import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';
import { TechBackground } from '../components/TechBackground';

export function RootLayout() {
  return (
    <div className="relative flex min-h-screen bg-[#0A0F0D]">
      <TechBackground />
      <Sidebar />
      <div className="relative z-10 flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}