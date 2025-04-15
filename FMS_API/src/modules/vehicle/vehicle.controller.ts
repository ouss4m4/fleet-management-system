import { Request, Response } from "express";
import { validateCreateVehiclePayload, validateUpdateVehiclePayload } from "./vehicle.types";
import { vehicleService } from "./vehicle.service";

export class VehicleController {
  public static async getVehicles(req: Request, res: Response) {
    try {
      const data = await vehicleService.findAll();
      res.json({ success: true, data });
    } catch (error) {
      VehicleController.handleError(res, error, "Failed to create vehicle");
    }
  }

  public static async getVehicleById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const vehicle = await vehicleService.findById(id);
      if (!vehicle) {
        res.status(404).json({ success: false, message: "Vehicle not found" });
        return;
      }
      res.json({ success: true, data: vehicle });
    } catch (error) {
      VehicleController.handleError(res, error, "Failed to find vehicle");
    }
  }

  public static async createVehicle(req: Request, res: Response): Promise<void> {
    try {
      const result = validateCreateVehiclePayload(req.body);
      if (!result.success) {
        throw result.error;
      }
      const vehicle = await vehicleService.create(result.data);
      res.status(201).json({ success: true, data: vehicle });
    } catch (error) {
      VehicleController.handleError(res, error, "Failed to create vehicle");
    }
  }

  public static async updateVehicle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const result = validateUpdateVehiclePayload(req.body);
      if (!result.success) {
        throw result.error;
      }
      const vehicle = await vehicleService.update(id, result.data);
      res.json({ success: true, data: vehicle });
    } catch (error: any) {
      VehicleController.handleError(res, error, "Failed to update vehicle");
    }
  }

  public static async deleteVehicle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await vehicleService.delete(id);
      res.status(204).send({ success: true });
    } catch (error) {
      VehicleController.handleError(res, error, "Failed to delete vehicle");
    }
  }

  private static handleError(res: Response, error: unknown, fallbackMessage: string) {
    if (error && typeof error === "object" && "errors" in error) {
      const formatted: Record<string, string> = {};
      (error as any).errors?.forEach((err: any) => {
        formatted[err.path?.join(".") || "unknown"] = err.message;
      });
      return res.status(400).json({ success: false, message: "missing fields", errors: formatted });
    }

    if (error instanceof Error) {
      console.error(error.message);
      return res.status(400).json({ success: false, message: error.message });
    }

    console.error(error);
    return res.status(400).json({ success: false, message: fallbackMessage });
  }
}
