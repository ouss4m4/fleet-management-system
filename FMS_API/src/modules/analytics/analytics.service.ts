import { CreateVehicleAnalyticsDTO } from "./analytics.types";

import { prisma } from "../../lib/prismaClient";
import { vehicleService } from "../vehicle/vehicle.service";
import { VehicleAnalytics } from "../../prisma";

class AnalyticsService {
  public async getAnalyticsForVehicle(vehicleId: string): Promise<VehicleAnalytics | null> {
    const vehicle = await vehicleService.findById(vehicleId);
    if (!vehicle) {
      throw new Error("VehicleId not found");
    }

    return await prisma.vehicleAnalytics.findFirst({ where: { vehicleId } });
  }

  public async createVehicleAnalytics(data: CreateVehicleAnalyticsDTO) {
    const vehicle = await vehicleService.findById(data.vehicleId);
    if (!vehicle) {
      throw new Error("VehicleId not found");
    }

    const geoPoint = {
      type: "Point",
      coordinates: [data.location.longitude, data.location.latitude],
    };

    try {
      const analytics = await prisma.vehicleAnalytics.upsert({
        where: {
          vehicleId: data.vehicleId, // Single Analytics Row Per Vehicle (for assesment reasons)
        },
        create: {
          vehicleId: data.vehicleId,
          hoursOperated: data.hoursOperated,
          distanceTraveled: data.distanceTraveled,
          location: geoPoint,
        },
        update: {
          hoursOperated: data.hoursOperated,
          distanceTraveled: data.distanceTraveled,
          location: geoPoint,
        },
      });

      return analytics;
    } catch (error) {
      console.error("Error creating vehicle analytics:", error);
      throw new Error("Could not create vehicle analytics");
    }
  }
}

export const analyticsService = new AnalyticsService();
