// src/lib/validators/maintenance.ts
import { z } from 'zod';

export const maintenanceSchema = z.object({
  cost: z
    .number({ invalid_type_error: 'Cost must be a number' })
    .min(0.01, 'Cost must be greater than zero'),
  date: z.string().min(1, 'Date is required'),
  description: z.string().min(3, 'Description must be at least 3 characters'),
  vehicleId: z.string().min(1, 'Vehicle ID is required'),
});

export type MaintenanceFormData = z.infer<typeof maintenanceSchema>;
