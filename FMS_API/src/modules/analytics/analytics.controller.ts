import { Request, Response } from "express";
import { analyticsService } from "./analytics.service";
import { validateCreateVehicleAnalyticsPayload } from "./analytics.types";
import logger from "../../utils/logger";

export class AnalyticsController {
  public static async getVehicleAnalytics(req: Request, res: Response): Promise<void> {
    try {
      const { id: vehicleId } = req.params;
      const data = await analyticsService.getAnalyticsForVehicle(vehicleId);
      res.json({ success: true, data });
    } catch (error) {
      AnalyticsController.handleError(res, error, "Failed to get vehicle analytics records");
    }
  }

  // TODO: this should not be exposed as an endpoint. creation of analytics in done internally (from sensor readings)
  public static async createVehicleAnalytics(req: Request, res: Response): Promise<void> {
    try {
      const { id: vehicleId } = req.params;
      const checkDto = validateCreateVehicleAnalyticsPayload({ ...req.body, vehicleId });
      if (!checkDto.success) {
        throw checkDto.error;
      }
      const data = await analyticsService.createVehicleAnalytics(checkDto.data);
      res.json({ success: true, data });
    } catch (error) {
      AnalyticsController.handleError(res, error, "Failed to get vehicle analytics records");
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

    return res.status(400).json({ success: false, message: fallbackMessage });
  }
}
