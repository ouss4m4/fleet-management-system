import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatDateToHumanReadable } from '@/lib/utils';
import { IVehicleMaintenance } from '@/typings';

type Props = {
  records: IVehicleMaintenance[];
};

export default function MaintenanceTable({ records }: Props) {
  return (
    <>
      <Card className="h-full cursor-pointer shadow-none transition hover:shadow-md">
        <CardHeader>
          <h2 className="text-lg font-semibold"> Maintenance Records</h2>
        </CardHeader>
        <CardContent>
          <div className="relative max-h-[300px] overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow className="sticky top-0 z-10 bg-white">
                  <TableHead className="w-[100px]">Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Cost</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {records.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell className="font-medium">
                      {formatDateToHumanReadable(
                        record.date,
                        'dd-MM-yyyy hh:ii'
                      )}
                    </TableCell>
                    <TableCell>{record.description}</TableCell>
                    <TableCell className="text-right">
                      <span className="mr-0.5 text-xs">$</span>
                      {record.cost}
                    </TableCell>
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
