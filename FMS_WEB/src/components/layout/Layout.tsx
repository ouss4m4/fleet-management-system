import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <header className="bg-white shadow px-6 py-4">
        <h1 className="text-2xl font-semibold text-center">Fleet Management System</h1>
      </header>

      <main className="mt-4 w-3/4 mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
