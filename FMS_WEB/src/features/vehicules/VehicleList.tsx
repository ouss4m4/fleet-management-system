import { Card, CardContent } from "@/components/ui/card";
import { IVehicle } from "@/typings";

type Props = {
  vehicles: IVehicle[];
};

export default function VehicleList({ vehicles }: Props) {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {vehicles.map((vehicle) => {
        const lastMaintenance = vehicle.maintenanceRecords.at(-1);

        return (
          <Card key={vehicle.id} className="shadow-sm hover:shadow-md transition">
            <CardContent className="p-4 space-y-1">
              <h2 className="text-lg font-semibold">{vehicle.name}</h2>
              <p className="text-sm text-muted-foreground capitalize">Type: {vehicle.type}</p>
              <p className="text-sm">
                <strong>Status:</strong> {vehicle.status}
              </p>
              <p className="text-sm">
                <strong>Sensors:</strong> {vehicle.sensors.length}
              </p>
              <p className="text-sm">
                <strong>Last Maintenance:</strong> {lastMaintenance ? new Date(lastMaintenance.date).toLocaleDateString() : "N/A"}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
