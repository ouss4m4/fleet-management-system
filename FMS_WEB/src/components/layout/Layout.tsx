import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/logo.svg';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
      <header className="bg-white py-4 shadow">
        <div className="relative mx-auto h-6 w-3/4">
          {/* Logo: hidden by default, shown on xl+ */}
          <Link to="/vehicles">
            <img
              src={logo}
              alt="Logo"
              className="absolute top-1/2 left-0 hidden h-4 -translate-y-1/2 lg:block"
            />
          </Link>
          {/* Title: always centered */}
          <Link to="/vehicles">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-sm font-semibold md:text-lg lg:text-2xl">
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
