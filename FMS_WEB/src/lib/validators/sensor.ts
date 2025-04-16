import { z } from 'zod';

export const SensorTypeEnum = z.enum([
  'GPS',
  'Mileage',
  'Temperature',
  'Hours',
]);

export const sensorSchema = z.object({
  name: z.string().min(3, 'Name is required'),
  type: SensorTypeEnum,
  unit: z.string().min(1, 'Unit is required'),
});

export type SensorFormData = z.infer<typeof sensorSchema>;
