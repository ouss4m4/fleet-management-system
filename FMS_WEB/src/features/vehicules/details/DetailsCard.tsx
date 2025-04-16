import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { IVehicle } from '@/typings';
import { Edit } from 'lucide-react';
import { useState } from 'react';
import EditVehicleDetails from './EditDetails';
type Props = {
  vehicle: IVehicle;
  reload: () => void;
};

export default function DetailsCard({ vehicle, reload }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card className="h-full shadow-none">
        <CardHeader>
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold">{vehicle.name}</p>
            <Button
              variant="outline"
              className="cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <Edit />
              <span className="hidden xl:block">Edit</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="grid grid-cols-2 space-y-1">
          <p className="text-muted-foreground text-sm capitalize">Model</p>
          <span className="text-primary font-semibold capitalize">
            {vehicle.model}
          </span>
          <p className="text-muted-foreground text-sm capitalize">Type</p>
          <span className="text-primary font-semibold">{vehicle.type}</span>
          <p className="text-muted-foreground text-sm capitalize">Status</p>
          <span className="text-primary font-semibold capitalize">
            {vehicle.status}
          </span>
          <p className="text-muted-foreground text-sm capitalize">Region</p>
          <span className="text-primary font-semibold">{vehicle.region}</span>
        </CardContent>
      </Card>
      <EditVehicleDetails
        onOpenChange={setOpen}
        open={open}
        reload={reload}
        vehicle={vehicle}
      />
    </>
  );
}
