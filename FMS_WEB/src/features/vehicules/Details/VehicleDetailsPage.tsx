import { api } from '@/lib/api';
import { IVehicle } from '@/typings';
import { useEffect, useState } from 'react';
import VehicleDetails from './VehicleDetails';
import { useParams } from 'react-router-dom';
import VehicleMaintenance from './VehicleMaintenance';
import VehicleSensors from './VehicleSensors';

export default function VehicleDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [vehicle, setVehicle] = useState<IVehicle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const res = await api<IVehicle>('GET', `/vehicles/${id}`);
        setVehicle(res);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchVehicle();
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!vehicle) return <p className="text-center">No vehicles found.</p>;

  return (
    <>
      <h1 className="mb-6 text-2xl font-semibold">Vehicle Details</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="h-full">
          <VehicleDetails vehicle={vehicle} />
        </div>
        <div className="h-full">
          <VehicleMaintenance data={vehicle.maintenanceRecords} />
        </div>
        <div className="h-full">
          <VehicleSensors data={vehicle.sensors} />
        </div>
      </div>
    </>
  );
}
