import { Router } from "express";
import { VehicleController } from "./vehicle.controller";
import { MaintenanceController } from "../maintenance/maintenance.controller";

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
