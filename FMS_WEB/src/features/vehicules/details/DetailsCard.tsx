import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { IVehicle } from '@/typings';

type Props = {
  vehicle: IVehicle;
};

export default function DetailsCard({ vehicle }: Props) {
  if (!vehicle) {
    return (
      <Card className="h-full cursor-pointer shadow-none transition hover:shadow-md">
        <CardHeader>
          <p className="text-lg font-semibold">No vehicle found</p>
        </CardHeader>
      </Card>
    );
  }
  return (
    <>
      <Card className="h-full cursor-pointer shadow-none transition hover:shadow-md">
        <CardHeader>
          <p className="text-lg font-semibold">{vehicle.name}</p>
        </CardHeader>
        <CardContent className="grid grid-cols-2 space-y-1">
          <p className="text-muted-foreground text-sm capitalize">Model</p>
          <span className="text-primary font-semibold">{vehicle.model}</span>
          <p className="text-muted-foreground text-sm capitalize">Type</p>
          <span className="text-primary font-semibold">{vehicle.type}</span>
          <p className="text-muted-foreground text-sm capitalize">Status</p>
          <span className="text-primary font-semibold">{vehicle.status}</span>
          <p className="text-muted-foreground text-sm capitalize">Region</p>
          <span className="text-primary font-semibold">{vehicle.region}</span>
        </CardContent>
      </Card>
    </>
  );
}
