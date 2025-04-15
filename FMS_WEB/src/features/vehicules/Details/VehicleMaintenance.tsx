import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { IVehicleMaintenance } from '@/typings';

type Props = {
  data: IVehicleMaintenance[];
};

export default function VehicleMaintenance({ data }: Props) {
  data = [...data, ...data, ...data, ...data];
  return (
    <>
      {/* {JSON.stringify(data)} */}
      <Card className="h-full cursor-pointer shadow-none transition hover:shadow-md">
        <CardHeader>
          <h2 className="text-lg font-semibold"> Maintenance Records</h2>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Cost</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((record) => (
                <TableRow key={record.id}>
                  <TableCell className="font-medium">{record.date}</TableCell>
                  <TableCell>{record.description}</TableCell>
                  <TableCell className="text-right">
                    <span className="mr-0.5 text-xs">$</span>
                    {record.cost}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
