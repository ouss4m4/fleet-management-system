import { z } from "zod";

// Expecting payload to be dynamic JSON
export const createMetricsSchema = z.object({
  sensorId: z.string().min(1),
  payload: z.record(z.any()),
  timestamp: z.string().datetime({ message: "Invalid ISO date format" }).default(new Date().toISOString()),
});

export type CreateMetricDTO = z.infer<typeof createMetricsSchema>;

export const validateCreateMetricsPayload = (data: unknown) => createMetricsSchema.safeParse(data);
