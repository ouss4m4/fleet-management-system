import { IVehicleMaintenance } from '@/typings';
import MaintenanceTable from './MaintenanceTable';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '@/lib/api';

export default function MaintenancePage() {
  const { id } = useParams<{ id: string }>();
  const [records, setRecords] = useState<IVehicleMaintenance[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const res = await api<IVehicleMaintenance[]>(
          'GET',
          `/vehicles/${id}/maintenance`
        );
        setRecords(res);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchRecords();
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!records.length) return <p className="text-center">No records found.</p>;
  return (
    <>
      <MaintenanceTable records={records} />
    </>
  );
}
