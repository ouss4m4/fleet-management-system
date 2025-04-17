import { MaintenanceRecord } from "../src/prisma";
import { maintenanceService } from "../src/modules/maintenance/maintenance.service";
import { prisma } from "../src/lib/prismaClient";

// Mock Prisma client
jest.mock("../src/lib/prismaClient", () => ({
  prisma: {
    maintenanceRecord: {
      findMany: jest.fn(),
      create: jest.fn(),
    },
  },
}));

describe("MaintenanceService", () => {
  const mockMaintenanceRecord: MaintenanceRecord = {
    id: "1",
    vehicleId: "vehicle-1",
    date: new Date(),
    description: "Regular oil change",
    cost: 100,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getVehicleMaintenance", () => {
    it("should return maintenance records for a vehicle", async () => {
      const mockRecords = [mockMaintenanceRecord];
      (prisma.maintenanceRecord.findMany as jest.Mock).mockResolvedValue(mockRecords);

      const result = await maintenanceService.getVehicleMaintenance("vehicle-1");

      expect(prisma.maintenanceRecord.findMany).toHaveBeenCalledWith({
        where: { vehicleId: "vehicle-1" },
        orderBy: { date: "desc" },
      });
      expect(result).toEqual(mockRecords);
    });

    it("should return empty array if no records found", async () => {
      (prisma.maintenanceRecord.findMany as jest.Mock).mockResolvedValue([]);

      const result = await maintenanceService.getVehicleMaintenance("non-existent-vehicle");

      expect(result).toEqual([]);
    });
  });

  describe("createVehicleMaintenanceRecord", () => {
    it("should create a new maintenance record", async () => {
      const createData = {
        vehicleId: "vehicle-1",
        date: new Date().toISOString(),
        description: "Regular oil change",
        cost: 100,
      };

      (prisma.maintenanceRecord.create as jest.Mock).mockResolvedValue(mockMaintenanceRecord);

      const result = await maintenanceService.createVehicleMaintenanceRecord(createData);

      expect(prisma.maintenanceRecord.create).toHaveBeenCalledWith({
        data: createData,
      });
      expect(result).toEqual(mockMaintenanceRecord);
    });

    it("should handle database errors", async () => {
      const createData = {
        vehicleId: "vehicle-1",
        date: new Date().toISOString(),
        description: "Regular oil change",
        cost: 100,
      };

      (prisma.maintenanceRecord.create as jest.Mock).mockRejectedValue(new Error("Database error"));

      await expect(maintenanceService.createVehicleMaintenanceRecord(createData)).rejects.toThrow("Database error");
    });
  });
});
