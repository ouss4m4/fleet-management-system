import { Request, Response } from "express";
import { telemetryService } from "./telemetry.service";
import { validateCreateTelemetryPayload } from "./telemetry.types";
import logger from "../../utils/logger";

export class TelemetryController {
  public static async createTelemetry(req: Request, res: Response): Promise<void> {
    try {
      const checkDto = validateCreateTelemetryPayload(req.body);
      if (!checkDto.success) {
        throw checkDto.error;
      }
      const data = await telemetryService.createTelemetry(req.body);

      res.json({ success: true, data });
    } catch (error) {
      TelemetryController.handleError(res, error, "Error creating entry, try again");
    }
  }

  public static async getTelemetry(_: Request, res: Response): Promise<void> {
    try {
      const data = await telemetryService.getTelemetery();
      res.json({ success: true, data });
    } catch (error) {
      TelemetryController.handleError(res, error, "Error loading telemetry");
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
