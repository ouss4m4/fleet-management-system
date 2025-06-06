import { MaintenanceRecord } from "../../prisma";
import { prisma } from "../../lib/prismaClient";
import { CreateMaintenanceDTO } from "./maintenace.types";

class MaintenanceService {
  public async getVehicleMaintenance(vehicleId: string): Promise<MaintenanceRecord[]> {
    return await prisma.maintenanceRecord.findMany({
      where: { vehicleId },
      orderBy: { date: "desc" },
    });
  }

  public async createVehicleMaintenanceRecord(data: CreateMaintenanceDTO): Promise<MaintenanceRecord> {
    return await prisma.maintenanceRecord.create({
      data,
    });
  }
}

export const maintenanceService = new MaintenanceService();
