import { Request, Response } from "express";
import { vehicleTrackingService } from "./track.service";

export class VehicleTrackingController {
  public static async trackVehicle(req: Request, res: Response): Promise<void> {
    try {
      const { id: vehicleId } = req.params;
      const data = await vehicleTrackingService.trackVehicle(vehicleId);
      res.json({ success: true, data });
    } catch (error) {
      VehicleTrackingController.handleError(res, error, "Error loading vehicle location");
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
