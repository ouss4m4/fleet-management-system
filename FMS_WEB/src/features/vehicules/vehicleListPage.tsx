import { useEffect, useState } from "react";
import { IVehicle } from "@/typings";
import { api } from "@/lib/api";
import VehicleList from "./VehicleList";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PlusCircleIcon } from "lucide-react";
export default function VehicleListPage() {
  const [vehicles, setVehicles] = useState<IVehicle[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const res = await api<IVehicle[]>("GET", "/vehicles");
        setVehicles(res);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!vehicles?.length) return <p className="text-center">No vehicles found.</p>;

  return (
    <>
      <Button asChild className="mb-4">
        <Link to={"/vehicle/add"}>
          <PlusCircleIcon /> Add New Vehicle
        </Link>
      </Button>
      <VehicleList vehicles={vehicles} />;
    </>
  );
}
