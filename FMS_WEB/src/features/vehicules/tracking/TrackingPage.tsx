import { ITracking } from '@/typings';
import { useParams } from 'react-router-dom';
import { api } from '@/lib/api';
import { useSuspenseQuery } from '@tanstack/react-query';
import TrackingCard from './TrackingCard';

export default function TrackingPage() {
  const { id } = useParams<{ id: string }>();

  const { data } = useSuspenseQuery({
    queryKey: ['vehicle', id, 'track'],
    queryFn: () => api<ITracking>('GET', `/vehicles/${id}/track`),
  });

  return <TrackingCard data={data} />;
}
