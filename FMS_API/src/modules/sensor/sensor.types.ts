import { z } from "zod";

export const SensorTypeEnum = z.enum(["gps", "thermal", "mileage", "temperature"]);

export const createSensorSchema = z.object({
  type: SensorTypeEnum,
  name: z.string().min(1),
  unit: z.string().min(1),
});

export type CreateSensorDTO = z.infer<typeof createSensorSchema>;

export const validateCreateSensorPayload = (data: unknown) => createSensorSchema.safeParse(data);
