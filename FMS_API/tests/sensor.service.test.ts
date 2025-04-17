import { Sensor } from "../generated/prisma";
import { sensorService } from "../src/modules/sensor/sensor.service";
import { vehicleService } from "../src/modules/vehicle/vehicle.service";
import { prisma } from "../src/lib/prismaClient";
import { CreateSensorDTO } from "../src/modules/sensor/sensor.types";

// Mock dependencies
jest.mock("../src/lib/prismaClient", () => ({
  prisma: {
    sensor: {
      findMany: jest.fn(),
      create: jest.fn(),
      delete: jest.fn(),
    },
  },
}));

jest.mock("../src/modules/vehicle/vehicle.service", () => ({
  vehicleService: {
    findById: jest.fn(),
  },
}));

describe("SensorService", () => {
  const mockSensor: Sensor = {
    id: "sensor-1",
    vehicleId: "vehicle-1",
    name: "ODO METER",
    type: "Milage",
    unit: "Kilometers",
    createdAt: new Date(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getSensors", () => {
    it("should return paginated sensors", async () => {
      const mockSensors = [mockSensor];
      (prisma.sensor.findMany as jest.Mock).mockResolvedValue(mockSensors);

      const result = await sensorService.getSensors(10, 0);

      expect(prisma.sensor.findMany).toHaveBeenCalledWith({
        take: 10,
        skip: 0,
        orderBy: { id: "desc" },
      });
      expect(result).toEqual(mockSensors);
    });

    it("should use default pagination values", async () => {
      const mockSensors = [mockSensor];
      (prisma.sensor.findMany as jest.Mock).mockResolvedValue(mockSensors);

      await sensorService.getSensors();

      expect(prisma.sensor.findMany).toHaveBeenCalledWith({
        take: 10,
        skip: 0,
        orderBy: { id: "desc" },
      });
    });
  });

  describe("assignSensorToVehicle", () => {
    const createData: CreateSensorDTO = {
      vehicleId: "vehicle-1",
      name: "ODO METER",
      type: "Mileage",
      unit: "Kilometers",
    };

    it("should assign sensor to a valid vehicle", async () => {
      const mockVehicle = { id: "vehicle-1" };
      (vehicleService.findById as jest.Mock).mockResolvedValue(mockVehicle);
      (prisma.sensor.create as jest.Mock).mockResolvedValue(mockSensor);

      const result = await sensorService.assignSensorToVehicle(createData);

      expect(vehicleService.findById).toHaveBeenCalledWith("vehicle-1");
      expect(prisma.sensor.create).toHaveBeenCalledWith({
        data: createData,
      });
      expect(result).toEqual(mockSensor);
    });

    it("should throw error for non-existent vehicle", async () => {
      (vehicleService.findById as jest.Mock).mockResolvedValue(null);

      await expect(sensorService.assignSensorToVehicle(createData)).rejects.toThrow("VehicleId not found");
    });

    it("should handle database errors", async () => {
      const mockVehicle = { id: "vehicle-1" };
      (vehicleService.findById as jest.Mock).mockResolvedValue(mockVehicle);
      (prisma.sensor.create as jest.Mock).mockRejectedValue(new Error("Database error"));

      await expect(sensorService.assignSensorToVehicle(createData)).rejects.toThrow("Database error");
    });
  });

  describe("getVehicleSensors", () => {
    it("should return sensors for a valid vehicle", async () => {
      const mockVehicle = { id: "vehicle-1" };
      const mockSensors = [mockSensor];
      (vehicleService.findById as jest.Mock).mockResolvedValue(mockVehicle);
      (prisma.sensor.findMany as jest.Mock).mockResolvedValue(mockSensors);

      const result = await sensorService.getVehicleSensors("vehicle-1");

      expect(vehicleService.findById).toHaveBeenCalledWith("vehicle-1");
      expect(prisma.sensor.findMany).toHaveBeenCalledWith({
        where: { vehicleId: "vehicle-1" },
      });
      expect(result).toEqual(mockSensors);
    });

    it("should throw error for non-existent vehicle", async () => {
      (vehicleService.findById as jest.Mock).mockResolvedValue(null);

      await expect(sensorService.getVehicleSensors("non-existent-vehicle")).rejects.toThrow("VehicleId not found");
    });
  });

  describe("removeSensorFromVehicle", () => {
    it("should remove sensor from vehicle", async () => {
      (prisma.sensor.delete as jest.Mock).mockResolvedValue(mockSensor);

      const result = await sensorService.removeSensorFromVehicle("sensor-1");

      expect(prisma.sensor.delete).toHaveBeenCalledWith({
        where: { id: "sensor-1" },
      });
      expect(result).toEqual(mockSensor);
    });

    it("should handle database errors", async () => {
      (prisma.sensor.delete as jest.Mock).mockRejectedValue(new Error("Database error"));

      await expect(sensorService.removeSensorFromVehicle("sensor-1")).rejects.toThrow("Database error");
    });
  });
});
