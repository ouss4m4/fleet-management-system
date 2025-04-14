import { Router } from "express";
import { VehicleController } from "./vehicle.controller";

export const vehicleRouter = Router();

vehicleRouter.get("/", VehicleController.getVehicles);
vehicleRouter.post("/", VehicleController.createVehicle);
vehicleRouter.get("/:id", VehicleController.getVehicleById);
vehicleRouter.put("/:id", VehicleController.updateVehicle);
vehicleRouter.delete("/:id", VehicleController.deleteVehicle);
