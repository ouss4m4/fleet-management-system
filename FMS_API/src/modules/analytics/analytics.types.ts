import { z } from "zod";

// Usage Analytics: Basic analytics on vehicle usage (e.g., hours operated, distance
// traveled, location, speed).
const createVehicleAnalytics = z.object({
  vehicleId: z.string().min(0),
  hoursOperated: z.number().min(0, "Hours operated must be a non-negative number"),
  distanceTraveled: z.number().min(0, "Distance traveled must be a non-negative number"),
  location: z.object({
    longitude: z.number().min(-180, "Longitude must be between -180 and 180").max(180, "Longitude must be between -180 and 180"),
    latitude: z.number().min(-90, "Latitude must be between -90 and 90").max(90, "Latitude must be between -90 and 90"),
  }),
  speed: z.number().min(0, "Speed must be a non-negative number"),
});

export type CreateVehicleAnalyticsDTO = z.infer<typeof createVehicleAnalytics>;

export const validateCreateVehicleAnalyticsPayload = (data: unknown) => createVehicleAnalytics.safeParse(data);
