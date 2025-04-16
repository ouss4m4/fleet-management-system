import { IVehicle } from '@/typings';
import { useParams } from 'react-router-dom';
import { api } from '@/lib/api';
import DetailsCard from './DetailsCard';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function DetailsPage() {
  const { id } = useParams<{ id: string }>();

  const { data: details } = useSuspenseQuery({
    queryKey: ['vehicle', id],
    queryFn: () => api<IVehicle>('GET', `/vehicles/${id}`),
  });
  return <DetailsCard vehicle={details} />;
}
