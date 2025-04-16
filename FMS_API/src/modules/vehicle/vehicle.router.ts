import { Router } from "express";
import { VehicleController } from "./vehicle.controller";
import { MaintenanceController } from "../maintenance/maintenance.controller";
import { SensorController } from "../sensor/sensor.controller";
import { AnalyticsController } from "../analytics/analytics.controller";
import { VehicleTrackingController } from "../track/track.controller";

export const vehicleRouter = Router();

// Vehicle base routes
vehicleRouter.get("/", VehicleController.getVehicles);
vehicleRouter.post("/", VehicleController.createVehicle);
vehicleRouter.get("/:id", VehicleController.getVehicleById);
vehicleRouter.put("/:id", VehicleController.updateVehicle);
vehicleRouter.delete("/:id", VehicleController.deleteVehicle);

/**
 * Vehicle Maintenance routes (TODO: If routes start getting bigger. create a /maintenance/maintenance.router.ts
 * and replace with
 * vehicleRouter.use("/:id/maintenance", maintenanceRouter)
 * maintenance should put vehicle status to maintenance
 */

vehicleRouter.get("/:id/maintenance", MaintenanceController.getVehicleMaintenance);
vehicleRouter.post("/:id/maintenance", MaintenanceController.createVehicleMaintenance);

// same as maintenance. can be opted to own router
vehicleRouter.get("/:id/sensor", SensorController.getVehicleSensors);
vehicleRouter.post("/:id/sensor", SensorController.assignSensorToVehicle);
vehicleRouter.delete("/:id/sensor/:sensorId", SensorController.removeSensorFromVehicle);

// track route
vehicleRouter.get("/:id/track", VehicleTrackingController.trackVehicle);

// analytics route
vehicleRouter.get("/:id/analytics", AnalyticsController.getVehicleAnalytics);
vehicleRouter.post("/:id/analytics", AnalyticsController.createVehicleAnalytics);
