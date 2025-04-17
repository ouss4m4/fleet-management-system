import { ISensor } from '@/typings';
import { useParams } from 'react-router-dom';
import { api } from '@/lib/api';
import SensorsTable from './SensorsTable';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function SensorsPage() {
  const { id = '' } = useParams<{ id: string }>();

  const { data: sensors, refetch } = useSuspenseQuery({
    queryKey: ['vehicle', id, 'sensor'],
    queryFn: () => api<ISensor[]>('GET', `/vehicles/${id}/sensor`),
  });

  return <SensorsTable sensors={sensors} reload={refetch} vehicleId={id} />;
}
