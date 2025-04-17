import { useEffect, useState } from 'react';
import { IVehicle } from '@/typings';
import { api } from '@/lib/api';
import VehicleList from './VehicleList';
import { Button } from '@/components/ui/button';
import { PlusCircleIcon } from 'lucide-react';
import RegisterVehicleDetails from './register/RegisterVehicule';

export default function VehicleListPage() {
  const [vehicles, setVehicles] = useState<IVehicle[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const fetchVehicles = async () => {
    try {
      setLoading(true);
      const res = await api<IVehicle[]>('GET', '/vehicles');
      setVehicles(res);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <>
      <Button
        className="mb-2 cursor-pointer"
        variant="outline"
        onClick={() => setOpen(true)}
      >
        <PlusCircleIcon /> Register Vehicle
      </Button>
      {vehicles && vehicles.length ? (
        <VehicleList vehicles={vehicles} />
      ) : (
        <p className="text-center">
          No vehicles found. Try registerinng a new one
        </p>
      )}

      <RegisterVehicleDetails
        onOpenChange={setOpen}
        open={open}
        reload={fetchVehicles}
      />
    </>
  );
}
