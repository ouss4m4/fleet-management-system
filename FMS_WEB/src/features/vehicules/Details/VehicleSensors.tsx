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
  data: ISensor[];
};

export default function VehicleSensors({ data }: Props) {
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
                {data.map((sensor) => (
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

// name: string;
//   type: string;
//   unit: string;
