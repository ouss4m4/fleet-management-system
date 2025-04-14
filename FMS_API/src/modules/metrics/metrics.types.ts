import { z } from "zod";

// Expecting payload to be dynamic JSON
export const createMetricsSchema = z.object({
  payload: z.record(z.any()),
});

export type CreateMetricDTO = z.infer<typeof createMetricsSchema>;

export const validateCreateMetricsPayload = (data: unknown) => createMetricsSchema.safeParse(data);
