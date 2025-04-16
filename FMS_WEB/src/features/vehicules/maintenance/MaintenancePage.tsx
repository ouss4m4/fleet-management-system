import { IVehicleMaintenance } from '@/typings';
import MaintenanceTable from './MaintenanceTable';
import { useParams } from 'react-router-dom';
import { api } from '@/lib/api';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function MaintenancePage() {
  const { id = '' } = useParams<{ id: string }>();

  const { data: records, refetch } = useSuspenseQuery({
    queryKey: ['vehicle', id, 'maintenance'],
    queryFn: () =>
      api<IVehicleMaintenance[]>('GET', `/vehicles/${id}/maintenance`),
  });

  return <MaintenanceTable records={records} reload={refetch} vehicleId={id} />;
}
