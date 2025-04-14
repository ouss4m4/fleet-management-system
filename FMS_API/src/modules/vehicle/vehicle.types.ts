import { z } from "zod";

// SCHEMAS FIRST
export const VehicleStatusEnum = z.enum(["active", "maintenance", "offline"]);

export const createVehicleSchema = z.object({
  name: z.string().min(1),
  model: z.string().min(1),
  type: z.string().min(1),
  region: z.string().min(1),
  status: VehicleStatusEnum,
});

export const updateVehicleSchema = createVehicleSchema.partial();

// DTOS
export type CreateVehicleDTO = z.infer<typeof createVehicleSchema>;
export type UpdateVehicleDTO = z.infer<typeof updateVehicleSchema>;

// VALIDATIONS
export const validateCreateVehiclePayload = (data: unknown) => createVehicleSchema.safeParse(data);
export const validateUpdateVehiclePayload = (data: unknown) => updateVehicleSchema.safeParse(data);
