import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import VehicleListPage from '@/features/vehicules/vehicleListPage';
import VehicleDetailsPage from '@/features/vehicules/Details/VehicleDetailsPage';

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
        element: <VehicleDetailsPage />,
      },
      // {
      //   path: '/vehicles/add',
      //   element: <
      // }
    ],
  },
]);

export default router;
