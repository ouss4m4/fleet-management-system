import { ITracking } from '@/typings';
import { useParams } from 'react-router-dom';
import { api } from '@/lib/api';
import TrackingCard from './TrackingCard';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function TrackingPage() {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<ITracking | null>(null);
  const [isLoading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrackData = async () => {
      const data = await api<ITracking>('GET', `/vehicles/${id}/track`);

      setData(data);
    };

    const interval = setInterval(() => {
      fetchTrackData();
    }, 2000);
    setLoading(false);

    return () => clearInterval(interval);
  }, [id]);

  if (isLoading || !data) {
    return (
      <div className="h-full min-h-80 w-full bg-white">
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </div>
    );
  }

  return <TrackingCard data={data} />;
}
