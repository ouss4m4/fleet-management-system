import { Sensor, Vehicle } from "../../../generated/prisma";
import { prisma } from "../../lib/prismaClient";
import { vehicleService } from "../vehicle/vehicle.service";
import { CreateSensorDTO } from "./sensor.types";

class SensorService {
  public async getSensors(take = 10, skip = 0): Promise<Sensor[]> {
    return await prisma.sensor.findMany({
      take,
      skip,
      orderBy: { id: "desc" },
    });
  }

  public async assignSensorToVehicle(data: CreateSensorDTO): Promise<Sensor> {
    const vehicle = await vehicleService.findById(data.vehicleId);
    if (!vehicle) {
      throw new Error("VehicleId not found");
    }
    return await prisma.sensor.create({ data });
  }

  public async getVehicleSensors(vehicleId: string): Promise<Sensor[]> {
    const vehicle = await vehicleService.findById(vehicleId);
    if (!vehicle) {
      throw new Error("VehicleId not found");
    }
    return await prisma.sensor.findMany({
      where: {
        vehicleId,
      },
    });
  }

  public async removeSensorFromVehicle(sensorId: string) {
    return await prisma.sensor.delete({
      where: { id: sensorId },
    });
  }
}

export const sensorService = new SensorService();
