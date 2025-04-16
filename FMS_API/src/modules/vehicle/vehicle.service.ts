import { CreateVehicleDTO, UpdateVehicleDTO } from "./vehicle.types";
import { Vehicle } from "../../../generated/prisma";
import { prisma } from "../../lib/prismaClient";

class VehicleService {
  async create(data: CreateVehicleDTO): Promise<Vehicle> {
    return prisma.vehicle.create({ data });
  }

  async findAll(): Promise<Vehicle[]> {
    return prisma.vehicle.findMany({
      include: {
        sensors: true,
        maintenanceRecords: true,
        analytics: true,
      },
    });
  }

  async findById(id: string): Promise<Vehicle | null> {
    return prisma.vehicle.findUnique({
      where: { id },
      include: {
        sensors: true,
        maintenanceRecords: true,
      },
    });
  }

  async update(id: string, data: UpdateVehicleDTO): Promise<Vehicle> {
    return prisma.vehicle.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<Vehicle> {
    return prisma.vehicle.delete({
      where: { id },
    });
  }
}

export const vehicleService = new VehicleService();
