import { Router } from "express";
import { vehicleRouter } from "../modules/vehicle/vehicle.router";

const apiv1router = Router();

apiv1router.use("/vehicle", vehicleRouter);
export { apiv1router };
