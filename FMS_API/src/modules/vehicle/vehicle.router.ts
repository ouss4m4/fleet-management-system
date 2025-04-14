import { Router } from "express";
import { VehicleController } from "./vehicle.controller";
import { MaintenanceController } from "../maintenance/maintenance.controller";
import { SensorController } from "../sensor/sensor.controller";

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
 */

vehicleRouter.get("/:id/maintenance", MaintenanceController.getVehicleMaintenance);
vehicleRouter.post("/:id/maintenance", MaintenanceController.createVehicleMaintenance);

// same as maintenance. can be opted to own router
vehicleRouter.get("/:id/sensor", SensorController.getVehicleSensors);
vehicleRouter.post("/:id/sensor", SensorController.assignSensorToVehicle);
vehicleRouter.delete("/:id/sensor/:sensorId", SensorController.removeSensorFromVehicle);
