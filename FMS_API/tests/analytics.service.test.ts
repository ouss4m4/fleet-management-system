import { VehicleAnalytics } from "../generated/prisma";
import { analyticsService } from "../src/modules/analytics/analytics.service";
import { vehicleService } from "../src/modules/vehicle/vehicle.service";
import { prisma } from "../src/lib/prismaClient";

// Mock dependencies
jest.mock("../src/lib/prismaClient", () => ({
  prisma: {
    vehicleAnalytics: {
      findFirst: jest.fn(),
      upsert: jest.fn(),
    },
  },
}));

jest.mock("../src/modules/vehicle/vehicle.service", () => ({
  vehicleService: {
    findById: jest.fn(),
  },
}));

describe("AnalyticsService", () => {
  const mockVehicleAnalytics: VehicleAnalytics = {
    id: "1",
    vehicleId: "vehicle-1",
    hoursOperated: 100,
    distanceTraveled: 5000,
    location: {
      type: "Point",
      coordinates: [0, 0],
    },
    lastUpdated: new Date(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getAnalyticsForVehicle", () => {
    it("should return analytics for a valid vehicle", async () => {
      const mockVehicle = { id: "vehicle-1" };
      (vehicleService.findById as jest.Mock).mockResolvedValue(mockVehicle);
      (prisma.vehicleAnalytics.findFirst as jest.Mock).mockResolvedValue(mockVehicleAnalytics);

      const result = await analyticsService.getAnalyticsForVehicle("vehicle-1");

      expect(vehicleService.findById).toHaveBeenCalledWith("vehicle-1");
      expect(prisma.vehicleAnalytics.findFirst).toHaveBeenCalledWith({
        where: { vehicleId: "vehicle-1" },
      });
      expect(result).toEqual(mockVehicleAnalytics);
    });

    it("should throw error for non-existent vehicle", async () => {
      (vehicleService.findById as jest.Mock).mockResolvedValue(null);

      await expect(analyticsService.getAnalyticsForVehicle("non-existent-vehicle")).rejects.toThrow("VehicleId not found");
    });
  });

  describe("createVehicleAnalytics", () => {
    const createData = {
      vehicleId: "vehicle-1",
      hoursOperated: 100,
      distanceTraveled: 5000,
      location: {
        latitude: 0,
        longitude: 0,
      },
    };

    it("should create analytics for a valid vehicle", async () => {
      const mockVehicle = { id: "vehicle-1" };
      (vehicleService.findById as jest.Mock).mockResolvedValue(mockVehicle);
      (prisma.vehicleAnalytics.upsert as jest.Mock).mockResolvedValue(mockVehicleAnalytics);

      const result = await analyticsService.createVehicleAnalytics(createData);

      expect(vehicleService.findById).toHaveBeenCalledWith("vehicle-1");
      expect(prisma.vehicleAnalytics.upsert).toHaveBeenCalledWith({
        where: { vehicleId: "vehicle-1" },
        create: {
          vehicleId: "vehicle-1",
          hoursOperated: 100,
          distanceTraveled: 5000,
          location: {
            type: "Point",
            coordinates: [0, 0],
          },
        },
        update: {
          hoursOperated: 100,
          distanceTraveled: 5000,
          location: {
            type: "Point",
            coordinates: [0, 0],
          },
        },
      });
      expect(result).toEqual(mockVehicleAnalytics);
    });

    it("should throw error for non-existent vehicle", async () => {
      (vehicleService.findById as jest.Mock).mockResolvedValue(null);

      await expect(analyticsService.createVehicleAnalytics(createData)).rejects.toThrow("VehicleId not found");
    });
  });
});
