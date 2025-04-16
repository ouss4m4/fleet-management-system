import { analyticsService } from "../analytics/analytics.service";
import { vehicleService } from "../vehicle/vehicle.service";

export interface IVehicleTrackingResponse {
  status: string;
  location: string;
  lastUpdate: Date;
}

class TrackingService {
  public async trackVehicle(vehicleId: string): Promise<Partial<IVehicleTrackingResponse>> {
    const vehicle = await vehicleService.findById(vehicleId);
    if (!vehicle) {
      throw new Error("VehicleId not found");
    }

    const vehicleAnalytic = await analyticsService.getAnalyticsForVehicle(vehicle.id);

    const result: Partial<IVehicleTrackingResponse> = {
      status: vehicle.status,
    };
    if (vehicleAnalytic) {
      result.location = JSON.parse(JSON.stringify(vehicleAnalytic.location));
      result.lastUpdate = vehicleAnalytic?.lastUpdated;
    }

    return result;
  }
}

export const vehicleTrackingService = new TrackingService();
