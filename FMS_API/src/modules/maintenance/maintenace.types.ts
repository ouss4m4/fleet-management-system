import { z } from "zod";

export const createMaintenanceSchema = z.object({
  vehicleId: z.string().min(1),
  date: z.string().datetime({ message: "Invalid ISO date format" }).default(new Date().toISOString()),
  description: z.string().min(1),
  cost: z.number().nonnegative(),
});

export type CreateMaintenanceDTO = z.infer<typeof createMaintenanceSchema>;

export const validateCreateMaintenancePayload = (data: unknown) => createMaintenanceSchema.safeParse(data);
