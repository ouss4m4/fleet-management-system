import { Router } from "express";
import { VehicleController } from "./vehicle.controller";

export const vehicleRouter = Router();

vehicleRouter.get("/", VehicleController.getVehicles);
vehicleRouter.get("/:id", VehicleController.getVehicleById);
vehicleRouter.post("/", VehicleController.createVehicle);
vehicleRouter.put("/", VehicleController.updateVehicle);
vehicleRouter.delete("/", VehicleController.deleteVehicle);
