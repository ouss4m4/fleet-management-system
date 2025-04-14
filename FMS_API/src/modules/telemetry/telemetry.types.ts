import { z } from "zod";

// Expecting payload to be dynamic JSON
export const createTelemetrySchema = z.object({
  sensorId: z.string().min(1),
  payload: z.any(),
  timestamp: z.string().datetime({ message: "Invalid ISO date format" }).default(new Date().toISOString()),
});

export type CreateTelemetryDTO = z.infer<typeof createTelemetrySchema>;

export const validateCreateTelemetryPayload = (data: unknown) => createTelemetrySchema.safeParse(data);
