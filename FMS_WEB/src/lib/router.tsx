import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import VehicleListPage from '@/features/vehicules/vehicleListPage';
import VehiclePage from '@/features/vehicules/VehiclePage';

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
      // {
      //   path: '/vehicles/add',
      //   element: <
      // }
    ],
  },
]);

export default router;
