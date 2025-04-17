import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ISensor } from '@/typings';
import AddSensor from './AddSensor';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

type Props = {
  sensors: ISensor[];
  reload: () => void;
  vehicleId: string;
};

export default function SensorsTable({ sensors, reload, vehicleId }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card className="h-full shadow-none">
        <CardHeader>
          <div className="flex justify-between">
            <div className="flex items-center space-x-1">
              <h2 className="text-lg font-semibold"> Sensors Available </h2>
              <span className="text-sm">({sensors.length})</span>
            </div>
            <Button
              className="cursor-pointer"
              variant="outline"
              onClick={() => setOpen(true)}
            >
              <PlusCircle />
              <span className="hidden xl:block">Add Sensor</span>
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          {sensors.length === 0 ? (
            <p>No sensors are assigned yet. start by adding one</p>
          ) : (
            <div className="relative max-h-[190px] overflow-y-auto">
              <Table>
                <TableHeader>
                  <TableRow className="sticky top-0 z-10 bg-white">
                    <TableHead className="w-[200px]">Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Unit</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sensors.map((sensor) => (
                    <TableRow key={sensor.id}>
                      <TableCell className="font-medium">
                        {sensor.name}
                      </TableCell>
                      <TableCell>{sensor.type}</TableCell>
                      <TableCell>{sensor.unit}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}{' '}
        </CardContent>
      </Card>

      <AddSensor
        open={open}
        onOpenChange={setOpen}
        reload={reload}
        vehicleId={vehicleId}
      />
    </>
  );
}
