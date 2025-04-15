import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import VehicleListPage from "@/features/vehicules/vehicleListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <VehicleListPage />,
      },
      // future routes go here
    ],
  },
]);

export default router;
