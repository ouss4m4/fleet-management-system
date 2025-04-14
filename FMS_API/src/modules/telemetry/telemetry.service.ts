import { prisma } from "../lib/prismaClient";
import { CreateTelemetryDTO } from "./telemetry.types";

class TelemetryService {
  // Create telemetry record
  async createTelemetry(data: CreateTelemetryDTO) {
    try {
      return await prisma.telemetry.create({ data });
    } catch (error) {
      console.error("Error creating telemetry:", error);
      throw new Error("Could not create telemetry");
    }
  }

  async getTelemetery() {
    return await prisma.telemetry.findMany({});
  }
}

export const telemetryService = new TelemetryService();
