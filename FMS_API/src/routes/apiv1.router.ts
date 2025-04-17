import { Router } from "express";
import { vehicleRouter } from "../modules/vehicle/vehicle.router";
import { telemetryRouter } from "../modules/telemetry/telemetry.route";

const apiv1router = Router();

apiv1router.use("/vehicles", vehicleRouter);
apiv1router.use("/telemetry", telemetryRouter);

// Swagger only in development (also servers at catch all for /api/v1)
if (process.env.NODE_ENV === "development") {
  import("../config/swagger").then(({ swaggerUi, swaggerSpec }) => {
    apiv1router.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log(`Swagger docs: http://localhost:${process.env.PORT}/api/v1`);
  });
}

export { apiv1router };
