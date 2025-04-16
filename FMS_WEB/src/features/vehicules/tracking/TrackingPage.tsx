import { ITracking } from '@/typings';
import { useParams } from 'react-router-dom';
import { api } from '@/lib/api';
import TrackingCard from './TrackingCard';
import { useEffect, useRef, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function TrackingPage() {
  const { id } = useParams<{ id: string }>();
  const refCount = useRef(0); // Track number of updates
  const [data, setData] = useState<ITracking | null>(null);
  const [isLoading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrackData = async () => {
      const original = await api<ITracking>('GET', `/vehicles/${id}/track`);

      if (original.location) {
        // setError('Failed to fetch tracking data');

        const lat = parseFloat(original.location.coordinates[1]);
        const lng = parseFloat(original.location.coordinates[0]);

        // Only shift after first fetch
        const offset = refCount.current > 0 ? refCount.current * 0.0004 : 0;

        const result: ITracking = {
          ...original,
          location: {
            ...original.location,
            coordinates: [(lng + offset).toFixed(6), (lat - offset).toFixed(6)],
          },
        };
        setData(result);
        return;
      } else {
        setData(original);
        clearInterval(interval);
      }
    };

    const interval = setInterval(() => {
      refCount.current += 1;
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
