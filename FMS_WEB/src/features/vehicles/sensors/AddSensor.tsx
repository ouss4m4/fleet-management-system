import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SensorTypeEnum } from '@/lib/validators/sensor';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { api } from '@/lib/api';
import { SensorFormData, sensorSchema } from '@/lib/validators/sensor';

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  reload: () => void;
  vehicleId: string;
};

export default function AddSensor({
  open,
  onOpenChange,
  reload,
  vehicleId,
}: Props) {
  const form = useForm<SensorFormData>({
    resolver: zodResolver(sensorSchema),
    defaultValues: {
      name: '',
      type: 'GPS',
      unit: '',
    },
  });

  const onSubmit = async (values: SensorFormData) => {
    console.log(values);
    await api('POST', `/vehicles/${vehicleId}/sensor`, { body: values });
    reload();
    onOpenChange(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Attach New Sensor</DialogTitle>
          <DialogDescription>
            Fill out the details to assign a new sensor.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          {Object.values(form.formState.errors).map((error, index) => {
            console.error(error);
            return (
              <p key={index} className="text-red-500">
                {error.message}
              </p>
            );
          })}
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Distance" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {SensorTypeEnum.options.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="unit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Unit</FormLabel>
                  <FormControl>
                    <Input placeholder="Kilometers" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              role="button"
              className="w-full cursor-pointer"
            >
              Save
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
