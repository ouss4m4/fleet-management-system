import { Router } from "express";
import { TelemetryController } from "./telemetry.controller";

export const telemetryRouter = Router();

telemetryRouter.post("/", TelemetryController.createTelemetry);
telemetryRouter.get("/", TelemetryController.getTelemetry);
