import { ITracking } from '@/typings';
import { useParams } from 'react-router-dom';
import { api } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import TrackingCard from './TrackingCard';
import { useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function TrackingPage() {
  const { id } = useParams<{ id: string }>();

  const { data, refetch, isLoading } = useQuery({
    queryKey: ['vehicle', id, 'track'],
    queryFn: () => api<ITracking>('GET', `/vehicles/${id}/track`),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 2000);

    return () => clearInterval(interval); // clear listeners
  }, [id, refetch]);

  if (isLoading || !data)
    return (
      <>
        <div className="h-full min-h-80 w-full bg-white">
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </div>
      </>
    );

  return <TrackingCard data={data} />;
}
