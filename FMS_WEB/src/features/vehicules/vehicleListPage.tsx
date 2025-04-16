import { useEffect, useState } from 'react';
import { IVehicle } from '@/typings';
import { api } from '@/lib/api';
import VehicleList from './VehicleList';
import { Button } from '@/components/ui/button';
import { PlusCircleIcon } from 'lucide-react';
import RegisterVehicleDetails from './register/AddVehicule';

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
  if (!vehicles?.length) {
    return <p className="text-center">No vehicles found.</p>;
  }

  return (
    <>
      <Button className="mb-2" variant="outline" onClick={() => setOpen(true)}>
        <PlusCircleIcon /> Register Vehicle
      </Button>
      <VehicleList vehicles={vehicles} />
      <RegisterVehicleDetails
        onOpenChange={setOpen}
        open={open}
        reload={fetchVehicles}
      />
    </>
  );
}
