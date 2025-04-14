import { z } from "zod";

// TODO: This should be a separate collection SensorTypes and should be a dropdown on frontend (remove enum hardcode)
export const SensorTypeEnum = z.enum(["gps", "thermal", "mileage", "temperature"]);

export const createSensorSchema = z.object({
  type: SensorTypeEnum,
  name: z.string().min(1),
  unit: z.string().min(1),
  vehicleId: z.string().min(1),
});

export type CreateSensorDTO = z.infer<typeof createSensorSchema>;

export const validateCreateSensorPayload = (data: unknown) => createSensorSchema.safeParse(data);
