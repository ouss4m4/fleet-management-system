import { Sensor, Telemetry } from "../../../generated/prisma";
import { prisma } from "../../lib/prismaClient";
import logger from "../../utils/logger";

type PartialAnalytics = {
  hoursOperated?: number;
  distanceTraveled?: number;
  location?: any;
};

export async function updateVehicleAnalytics(): Promise<void> {
  try {
    // 1. Get all sensors
    const sensors = await prisma.sensor.findMany();

    // 2. For each sensor, get latest telemetry
    // THIS IS BECAUSE WE ARE OVERRING ANALYTICS
    // On real app. we should GroupBy and add a stat_hour
    // to make a timeseries
    const latestPerSensor: Record<string, { sensor: Sensor; telemetry: Telemetry | null }> = {};

    for (const sensor of sensors) {
      const telemetry = await prisma.telemetry.findFirst({
        where: { sensorId: sensor.id },
        orderBy: { timestamp: "desc" },
      });
      latestPerSensor[sensor.id] = { sensor, telemetry };
    }

    // 3. Group by vehicle and extract values
    const groupedByVehicle: Record<string, PartialAnalytics> = {};

    for (const { sensor, telemetry } of Object.values(latestPerSensor)) {
      if (!telemetry) continue;

      const vehicleId = sensor.vehicleId;
      if (!groupedByVehicle[vehicleId]) {
        groupedByVehicle[vehicleId] = {};
      }
      const value = telemetry.payload;

      switch (sensor.type) {
        case "Mileage":
          groupedByVehicle[vehicleId].distanceTraveled = Number(value);
          break;
        case "Hours":
          groupedByVehicle[vehicleId].hoursOperated = Number(value);
          break;
        case "GPS":
          groupedByVehicle[vehicleId].location = {
            type: "Point",
            coordinates: value,
          };
          break;
        default:
          break;
      }
    }

    // 4. Upsert into VehicleAnalytics
    for (const [vehicleId, data] of Object.entries(groupedByVehicle)) {
      await prisma.vehicleAnalytics.upsert({
        where: { vehicleId },
        update: {
          ...data,
        },
        create: {
          vehicleId,
          hoursOperated: data.hoursOperated ?? 0,
          distanceTraveled: data.distanceTraveled ?? 0,
          location: data.location ?? {
            type: "Point",
            coordinates: [],
          },
        },
      });
    }
    logger.info(`updateVehicleAnalytics: finished at ${new Date().toLocaleDateString()}`);
  } catch (error) {
    logger.error(`Error in updateVehicleAnalytics: ${error}`);
    throw error;
  }
}

// Loop forever
(async () => {
  logger.info(`updateVehicleAnalytics: Starting`);
  setInterval(updateVehicleAnalytics, 6000);
  await new Promise(() => {});
})();
