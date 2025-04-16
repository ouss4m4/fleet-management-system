import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
      <header className="bg-white px-6 py-4 shadow">
        <Link to="/vehicles">
          <h1 className="text-center text-2xl font-semibold">
            Fleet Management System
          </h1>
        </Link>
      </header>

      <main className="mx-auto mt-4 w-3/4">
        <Outlet />
      </main>
    </div>
  );
}
