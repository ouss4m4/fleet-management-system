import { Button } from '@/components/ui/button';
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
import { PlusCircle } from 'lucide-react';
import { useState } from 'react';
import AddMaintenance from './AddMaintenance';
type Props = {
  records: IVehicleMaintenance[];
  reload: () => void;
  vehicleId: string;
};

export default function MaintenanceTable({
  records,
  reload,
  vehicleId,
}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card className="h-full shadow-none">
        <CardHeader>
          <div className="flex justify-between">
            <div className="flex items-center space-x-1">
              <h2 className="text-lg font-semibold"> Maintenance Records </h2>
              <span className="text-sm">({records.length})</span>
            </div>
            <Button
              className="cursor-pointer"
              variant="outline"
              onClick={() => setOpen(true)}
            >
              <PlusCircle />
              <span className="hidden xl:block">Add Maintenance</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {records.length === 0 ? (
            <p>No maintenance records available</p>
          ) : (
            <div className="relative max-h-[190px] overflow-y-auto">
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
          )}
        </CardContent>
      </Card>
      <AddMaintenance
        open={open}
        onOpenChange={setOpen}
        reload={reload}
        vehicleId={vehicleId}
      />
    </>
  );
}
