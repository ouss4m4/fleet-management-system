import { Request, Response } from "express";
import { maintenanceService } from "./maintenance.service";
import { validateCreateMaintenancePayload } from "./maintenace.types";
import logger from "../../utils/logger";

export class MaintenanceController {
  public static async getVehicleMaintenance(req: Request, res: Response): Promise<void> {
    const { id: vehicleId } = req.params;

    try {
      const data = await maintenanceService.getVehicleMaintenance(vehicleId);
      res.json({ success: true, data });
    } catch (error) {
      MaintenanceController.handleError(res, error, "Failed to get vehicle maintenance records");
    }
  }

  public static async createVehicleMaintenance(req: Request, res: Response): Promise<void> {
    const { id: vehicleId } = req.params;

    try {
      const dtoCheck = validateCreateMaintenancePayload({ ...req.body, vehicleId });
      if (!dtoCheck.success) {
        throw dtoCheck.error;
      }

      const data = await maintenanceService.createVehicleMaintenanceRecord(dtoCheck.data);
      res.json({ success: true, data });
    } catch (error) {
      MaintenanceController.handleError(res, error, "Failed to create vehicle maintenance");
    }
  }

  private static handleError(res: Response, error: unknown, fallbackMessage: string) {
    logger.error(error);

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
