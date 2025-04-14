import { Request, Response } from "express";
import { validateCreateVehiclePayload, validateUpdateVehiclePayload, CreateVehicleDTO, UpdateVehicleDTO } from "./vehicle.types";
import { vehicleService } from "./vehicle.service";

export class VehicleController {
  public static async getVehicles(req: Request, res: Response) {
    try {
      const vehicles = await vehicleService.findAll();

      res.json(vehicles);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch vehicles" });
    }
  }

  public static async getVehicleById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const vehicle = await vehicleService.findById(id);
      if (!vehicle) {
        res.status(404).json({ error: "Vehicle not found" });
        return;
      }
      res.json(vehicle);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch vehicle" });
    }
  }

  public static async createVehicle(req: Request, res: Response) {
    try {
      const data: CreateVehicleDTO = validateCreateVehiclePayload(req.body);
      const vehicle = await vehicleService.create(data);
      res.status(201).json(vehicle);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  public static async updateVehicle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data: UpdateVehicleDTO = validateUpdateVehiclePayload(req.body);
      const vehicle = await vehicleService.update(id, data);
      res.json(vehicle);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  public static async deleteVehicle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await vehicleService.delete(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete vehicle" });
    }
  }
}
