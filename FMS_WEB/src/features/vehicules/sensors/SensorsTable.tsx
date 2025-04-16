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

type Props = {
  sensors: ISensor[];
};

export default function SensorsTable({ sensors }: Props) {
  if (!sensors || sensors.length === 0) {
    return (
      <Card className="h-full cursor-pointer shadow-none transition hover:shadow-md">
        <CardHeader>
          <h2 className="text-lg font-semibold"> No Sensors Available</h2>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            No sensors found for this vehicle.
          </p>
        </CardContent>
      </Card>
    );
  }
  return (
    <>
      <Card className="h-full cursor-pointer shadow-none transition hover:shadow-md">
        <CardHeader>
          <h2 className="text-lg font-semibold"> Sensors Available</h2>
        </CardHeader>
        <CardContent>
          <div className="relative max-h-[300px] overflow-y-auto">
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
                    <TableCell className="font-medium">{sensor.name}</TableCell>
                    <TableCell>{sensor.type}</TableCell>
                    <TableCell>{sensor.type}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
