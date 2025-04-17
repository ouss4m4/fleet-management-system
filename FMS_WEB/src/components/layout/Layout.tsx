import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/logo.svg';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
      <header className="bg-white px-6 py-4 shadow">
        <div className="relative mx-auto h-16 w-3/4">
          {/* Logo: hidden by default, shown on xl+ */}
          <img
            src={logo}
            alt="Logo"
            className="absolute top-1/2 left-0 hidden h-4 w-48 -translate-y-1/2 lg:block"
          />

          {/* Title: always centered */}
          <Link to="/vehicles">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-2xl font-semibold">
              Fleet Management System
            </h1>
          </Link>
        </div>
      </header>

      <main className="mx-auto mt-4 w-3/4">
        <Outlet />
      </main>
    </div>
  );
}
