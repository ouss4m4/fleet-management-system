import { analyticsService } from "../analytics/analytics.service";
import { vehicleService } from "../vehicle/vehicle.service";

export interface IVehicleTrackingResponse {
  status: string;
  location: string;
  lastUpdate: Date;
}

class TrackingService {
  public async trackVehicle(vehicleId: string): Promise<IVehicleTrackingResponse> {
    const vehicle = await vehicleService.findById(vehicleId);
    if (!vehicle) {
      throw new Error("VehicleId not found");
    }

    const vehicleAnalytic = await analyticsService.getAnalyticsForVehicle(vehicle.id);

    if (!vehicleAnalytic) {
      throw new Error("No data for vehicle, try again later");
    }

    const result: IVehicleTrackingResponse = {
      status: vehicle.status,
      lastUpdate: vehicleAnalytic?.lastUpdated,
      location: JSON.parse(JSON.stringify(vehicleAnalytic.location)),
    };

    return result;
  }
}

export const vehicleTrackingService = new TrackingService();
