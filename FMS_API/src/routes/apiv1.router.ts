import { Router } from "express";
import { vehicleRouter } from "../modules/vehicle/vehicle.router";

const apiv1router = Router();

apiv1router.use("/vehicles", vehicleRouter);

// Swagger only in development
if (process.env.NODE_ENV !== "production") {
  import("../config/swagger").then(({ swaggerUi, swaggerSpec }) => {
    apiv1router.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log(`Swagger docs: http://localhost:${process.env.PORT}/api/v1`);
  });
}

export { apiv1router };
