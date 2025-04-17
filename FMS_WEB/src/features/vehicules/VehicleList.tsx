import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { IVehicle } from '@/typings';
import { Link } from 'react-router-dom';

type Props = {
  vehicles: IVehicle[];
};

export default function VehicleList({ vehicles }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
      {vehicles.map((vehicle) => {
        const lastMaintenance = vehicle.maintenanceRecords.at(-1);

        return (
          <Link to={`/vehicles/${vehicle.id}`} key={vehicle.id}>
            <Card className="cursor-pointer shadow-none transition hover:shadow-md">
              <CardContent className="grid grid-cols-2 space-y-1 p-4">
                <p className="text-muted-foreground text-sm capitalize">Name</p>
                <span className="text-primary font-semibold">
                  {vehicle.name}
                </span>
                <p className="text-muted-foreground text-sm capitalize">
                  Model
                </p>
                <span className="text-primary font-semibold">
                  {vehicle.model}
                </span>
                <p className="text-muted-foreground text-sm capitalize">Type</p>
                <span className="text-primary font-semibold">
                  {vehicle.type}
                </span>
                <p className="text-muted-foreground text-sm capitalize">
                  Status
                </p>
                <span className="text-primary font-semibold capitalize">
                  {vehicle.status}
                </span>
                <p className="text-muted-foreground text-sm capitalize">
                  Region
                </p>
                <span className="text-primary font-semibold">
                  {vehicle.region}
                </span>
              </CardContent>
              <CardFooter className="space-x-4">
                <div className="flex flex-col rounded border p-2 hover:shadow">
                  <p className="text-sm">Sensors</p>
                  <p className="text-center">{vehicle.sensors.length ?? 0}</p>
                </div>
                <div className="flex flex-col rounded border p-2">
                  <p className="text-sm">Last Maintenance</p>
                  <p className="text-center">
                    {lastMaintenance
                      ? new Date(lastMaintenance.date).toLocaleDateString()
                      : 'N/A'}
                  </p>
                </div>
              </CardFooter>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
