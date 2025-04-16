import { IAnalytics } from '@/typings';
import { useParams } from 'react-router-dom';
import { api } from '@/lib/api';
import { useSuspenseQuery } from '@tanstack/react-query';
import AnalyticsCards from './AnalyticsCard';

export default function AnalyticsPage() {
  const { id } = useParams<{ id: string }>();

  const { data, refetch } = useSuspenseQuery({
    queryKey: ['vehicle', id, 'analytics'],
    queryFn: () => api<IAnalytics>('GET', `/vehicles/${id}/analytics`),
  });

  return <AnalyticsCards data={data} reload={refetch} />;
}
