import { Request, Response } from "express";
import { sensorService } from "./sensor.service";
import { validateCreateSensorPayload } from "./sensor.types";

export class SensorController {
  public static async getSensors(_: Request, res: Response): Promise<void> {
    try {
      const data = await sensorService.getSensors();
      res.json({ success: true, data });
    } catch (error) {
      SensorController.handleError(res, error, "Error loading sensors");
    }
  }

  public static async getVehicleSensors(req: Request, res: Response): Promise<void> {
    try {
      const { id: vehicleId } = req.params;
      const data = await sensorService.getVehicleSensors(vehicleId);
      res.json({ success: true, data });
    } catch (error) {
      SensorController.handleError(res, error, "Error loading vehicle sensors");
    }
  }

  public static async assignSensorToVehicle(req: Request, res: Response): Promise<void> {
    try {
      const { id: vehicleId } = req.params;
      const checkDto = validateCreateSensorPayload({ ...req.body, vehicleId });
      if (!checkDto.success) {
        throw checkDto.error;
      }
      const data = await sensorService.assignSensorToVehicle(checkDto.data);
      res.json({ success: true, data });
    } catch (error) {
      SensorController.handleError(res, error, "Error assigning sensor to vehicle");
    }
  }

  public static async removeSensorFromVehicle(req: Request, res: Response): Promise<void> {
    try {
      const { sensorId } = req.params;
      const data = await sensorService.removeSensorFromVehicle(sensorId);
      res.json({ success: true, data });
    } catch (error) {
      SensorController.handleError(res, error, "Error removing sensor");
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
