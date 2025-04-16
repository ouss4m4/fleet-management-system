import { z } from 'zod';

export const VehicleStatusEnum = z.enum(['active', 'maintenance', 'offline']);

export const registerVehicleSchema = z.object({
  name: z.string().min(3, 'Name is required'),
  model: z.string().min(1, 'Model is required'),
  type: z.string().min(1, 'Type is required'),
  status: VehicleStatusEnum,
  region: z.string().min(1, 'Region is required'),
});
export const editVehicleSchema = registerVehicleSchema.partial();

export type RegisterVehicleFormData = z.infer<typeof registerVehicleSchema>;
export type EditVehicleFormData = Partial<RegisterVehicleFormData>;
