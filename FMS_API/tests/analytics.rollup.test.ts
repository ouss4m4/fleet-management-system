import { updateVehicleAnalytics } from "../src/modules/analytics/analytics.rollup";
import { Sensor, Telemetry, VehicleAnalytics } from "../generated/prisma";
import { prisma } from "../src/lib/prismaClient";
import logger from "../src/utils/logger";

// Mock dependencies
jest.mock("../src/lib/prismaClient", () => ({
  prisma: {
    sensor: {
      findMany: jest.fn(),
    },
    telemetry: {
      findFirst: jest.fn(),
    },
    vehicleAnalytics: {
      upsert: jest.fn(),
    },
  },
}));

jest.mock("../src/utils/logger", () => ({
  info: jest.fn(),
  error: jest.fn(),
}));

describe("AnalyticsRollup", () => {
  const mockSensors: Sensor[] = [
    {
      id: "sensor-1",
      vehicleId: "vehicle-1",
      name: "ODO METER",
      type: "Mileage",
      unit: "Kilometers",
      createdAt: new Date(),
    },
    {
      id: "sensor-2",
      vehicleId: "vehicle-1",
      name: "HOUR METER",
      type: "Hours",
      unit: "Hours",
      createdAt: new Date(),
    },
    {
      id: "sensor-3",
      vehicleId: "vehicle-1",
      name: "GPS",
      type: "GPS",
      unit: "Coordinates",
      createdAt: new Date(),
    },
  ];

  const mockTelemetry: Record<string, Telemetry> = {
    "sensor-1": {
      id: "telemetry-1",
      sensorId: "sensor-1",
      timestamp: new Date(),
      payload: "5000",
    },
    "sensor-2": {
      id: "telemetry-2",
      sensorId: "sensor-2",
      timestamp: new Date(),
      payload: "100",
    },
    "sensor-3": {
      id: "telemetry-3",
      sensorId: "sensor-3",
      timestamp: new Date(),
      payload: [10.123, 20.456],
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should correctly process and update vehicle analytics", async () => {
    // Setup mocks
    (prisma.sensor.findMany as jest.Mock).mockResolvedValue(mockSensors);
    (prisma.telemetry.findFirst as jest.Mock).mockImplementation(({ where }) => {
      return Promise.resolve(mockTelemetry[where.sensorId]);
    });

    const expectedAnalytics: Partial<VehicleAnalytics> = {
      vehicleId: "vehicle-1",
      distanceTraveled: 5000,
      hoursOperated: 100,
      location: {
        type: "Point",
        coordinates: [10.123, 20.456],
      },
    };

    (prisma.vehicleAnalytics.upsert as jest.Mock).mockResolvedValue(expectedAnalytics);

    // Execute
    await updateVehicleAnalytics();

    // Verify sensor query
    expect(prisma.sensor.findMany).toHaveBeenCalled();

    // Verify telemetry queries
    expect(prisma.telemetry.findFirst).toHaveBeenCalledTimes(3);
    mockSensors.forEach((sensor) => {
      expect(prisma.telemetry.findFirst).toHaveBeenCalledWith({
        where: { sensorId: sensor.id },
        orderBy: { timestamp: "desc" },
      });
    });

    // Verify analytics update
    expect(prisma.vehicleAnalytics.upsert).toHaveBeenCalledWith({
      where: { vehicleId: "vehicle-1" },
      update: {
        distanceTraveled: 5000,
        hoursOperated: 100,
        location: {
          type: "Point",
          coordinates: [10.123, 20.456],
        },
      },
      create: {
        vehicleId: "vehicle-1",
        distanceTraveled: 5000,
        hoursOperated: 100,
        location: {
          type: "Point",
          coordinates: [10.123, 20.456],
        },
      },
    });

    // Verify logging
    expect(logger.info).toHaveBeenCalledWith(expect.stringContaining("updateVehicleAnalytics: finished"));
  });

  it("should handle missing telemetry data", async () => {
    // Setup mocks with missing telemetry
    (prisma.sensor.findMany as jest.Mock).mockResolvedValue(mockSensors);
    (prisma.telemetry.findFirst as jest.Mock).mockResolvedValue(null);

    // Execute
    await updateVehicleAnalytics();

    // Verify sensor query
    expect(prisma.sensor.findMany).toHaveBeenCalled();

    // Verify telemetry queries
    expect(prisma.telemetry.findFirst).toHaveBeenCalledTimes(3);
    mockSensors.forEach((sensor) => {
      expect(prisma.telemetry.findFirst).toHaveBeenCalledWith({
        where: { sensorId: sensor.id },
        orderBy: { timestamp: "desc" },
      });
    });

    // Verify analytics update with default values
    expect(prisma.vehicleAnalytics.upsert).toHaveBeenCalledWith({
      where: { vehicleId: "vehicle-1" },
      update: {},
      create: {
        vehicleId: "vehicle-1",
        distanceTraveled: 0,
        hoursOperated: 0,
        location: {},
      },
    });
  });

  it("should handle database errors gracefully", async () => {
    // Setup mocks with database error
    (prisma.sensor.findMany as jest.Mock).mockRejectedValue(new Error("Database error"));

    // Execute and verify error handling
    await expect(updateVehicleAnalytics()).rejects.toThrow("Database error");
    expect(logger.error).toHaveBeenCalledWith(expect.stringContaining("Error in updateVehicleAnalytics"));
  });

  it("should handle invalid sensor data types", async () => {
    // Setup mocks with invalid sensor type
    const invalidSensor = {
      ...mockSensors[0],
      type: "INVALID_TYPE",
    };
    (prisma.sensor.findMany as jest.Mock).mockResolvedValue([invalidSensor]);
    (prisma.telemetry.findFirst as jest.Mock).mockResolvedValue(mockTelemetry["sensor-1"]);

    const expectedAnalytics: Partial<VehicleAnalytics> = {
      vehicleId: "vehicle-1",
      distanceTraveled: 0,
      hoursOperated: 0,
      location: {},
    };

    (prisma.vehicleAnalytics.upsert as jest.Mock).mockResolvedValue(expectedAnalytics);

    // Execute
    await updateVehicleAnalytics();

    // Verify analytics update with default values
    expect(prisma.vehicleAnalytics.upsert).toHaveBeenCalledWith({
      where: { vehicleId: "vehicle-1" },
      update: {},
      create: {
        vehicleId: "vehicle-1",
        distanceTraveled: 0,
        hoursOperated: 0,
        location: {},
      },
    });
  });

  // it("should start interval when run directly", () => {
  //   // Mock setInterval
  //   const setIntervalSpy = jest.spyOn(global, "setInterval");

  //   // Import the module and call the function directly
  //   const {
  //     startAnalyticsInterval,
  //   } = require("../src/modules/analytics/analytics.rollup");
  //   startAnalyticsInterval();

  //   // Verify setInterval was called
  //   expect(setIntervalSpy).toHaveBeenCalledWith(expect.any(Function), 6000);

  //   // Cleanup
  //   setIntervalSpy.mockRestore();
  // });
});
