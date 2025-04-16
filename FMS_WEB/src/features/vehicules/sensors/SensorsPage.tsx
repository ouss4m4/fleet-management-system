import { ISensor } from '@/typings';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import SensorsTable from './SensorsTable';

export default function SensorsPage() {
  const { id } = useParams<{ id: string }>();
  const [sensors, setSensors] = useState<ISensor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSensors = async () => {
      try {
        const res = await api<ISensor[]>('GET', `/vehicles/${id}/sensor`);
        setSensors(res);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchSensors();
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!sensors.length) return <p className="text-center">No sensors found.</p>;
  return (
    <>
      <SensorsTable sensors={sensors} />
    </>
  );
}
