import { prisma } from "../src/lib/prismaClient";
import { vehicleService } from "../src/modules/vehicle/vehicle.service";
import { CreateVehicleDTO, UpdateVehicleDTO } from "../src/modules/vehicle/vehicle.types";
import { Vehicle } from "../src/prisma";

// Mock Prisma client
jest.mock("../src/lib/prismaClient", () => ({
  prisma: {
    vehicle: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  },
}));

describe("VehicleService", () => {
  const mockVehicle: Vehicle = {
    id: "1",
    name: "Site - 01 - Drill Machine",
    model: "CAT",
    region: "Dubai",
    type: "Excavator",
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("create", () => {
    it("should create a new vehicle", async () => {
      const createData: CreateVehicleDTO = {
        name: "Site - 01 - Drill Machine",
        model: "CAT",
        region: "Dubai",
        type: "Excavator",
        status: "active" as const,
      };

      (prisma.vehicle.create as jest.Mock).mockResolvedValue(mockVehicle);

      const result = await vehicleService.create(createData);

      expect(prisma.vehicle.create).toHaveBeenCalledWith({
        data: createData,
      });
      expect(result).toEqual(mockVehicle);
    });
  });

  describe("findAll", () => {
    it("should return all vehicles with their relations", async () => {
      const mockVehicles = [mockVehicle];
      (prisma.vehicle.findMany as jest.Mock).mockResolvedValue(mockVehicles);

      const result = await vehicleService.findAll();

      expect(prisma.vehicle.findMany).toHaveBeenCalledWith({
        include: {
          sensors: true,
          maintenanceRecords: true,
          analytics: true,
        },
      });
      expect(result).toEqual(mockVehicles);
    });
  });

  describe("findById", () => {
    it("should return a vehicle by id", async () => {
      (prisma.vehicle.findUnique as jest.Mock).mockResolvedValue(mockVehicle);

      const result = await vehicleService.findById("1");

      expect(prisma.vehicle.findUnique).toHaveBeenCalledWith({
        where: { id: "1" },
        include: {
          sensors: true,
          maintenanceRecords: true,
        },
      });
      expect(result).toEqual(mockVehicle);
    });

    it("should return null if vehicle not found", async () => {
      (prisma.vehicle.findUnique as jest.Mock).mockResolvedValue(null);

      const result = await vehicleService.findById("999");

      expect(result).toBeNull();
    });
  });

  describe("update", () => {
    it("should update a vehicle", async () => {
      const updateData: UpdateVehicleDTO = {
        status: "maintenance" as const,
      };

      (prisma.vehicle.update as jest.Mock).mockResolvedValue({
        ...mockVehicle,
        ...updateData,
      });

      const result = await vehicleService.update("1", updateData);

      expect(prisma.vehicle.update).toHaveBeenCalledWith({
        where: { id: "1" },
        data: updateData,
      });
      expect(result.status).toBe("maintenance");
    });
  });

  describe("delete", () => {
    it("should delete a vehicle", async () => {
      (prisma.vehicle.delete as jest.Mock).mockResolvedValue(mockVehicle);

      const result = await vehicleService.delete("1");

      expect(prisma.vehicle.delete).toHaveBeenCalledWith({
        where: { id: "1" },
      });
      expect(result).toEqual(mockVehicle);
    });
  });
});
