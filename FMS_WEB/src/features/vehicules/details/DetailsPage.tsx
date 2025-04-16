import { IVehicle } from '@/typings';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import DetailsCard from './DetailsCard';

export default function DetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [details, setDetails] = useState<IVehicle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const res = await api<IVehicle>('GET', `/vehicles/${id}`);
        setDetails(res);
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
  if (!details) return <p className="text-center">No Vehicle details found.</p>;
  return (
    <>
      <DetailsCard vehicle={details} />
    </>
  );
}
