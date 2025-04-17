import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import VehicleListPage from '@/features/vehicles/vehicleListPage';
import VehiclePage from '@/features/vehicles/VehiclePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/vehicles" replace />,
  },
  {
    path: '/vehicles',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <VehicleListPage />,
      },
      {
        path: '/vehicles/:id',
        element: <VehiclePage />,
      },
      {
        path: '*', // This is the catch-all route (SPA after express)
        element: <Navigate to="/vehicles" replace />, // TODO: replace with a 404 components . and a butotn maybe
      },
    ],
  },
]);

export default router;
