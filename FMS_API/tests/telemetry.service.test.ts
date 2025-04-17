import { Telemetry } from "../generated/prisma";
import { telemetryService } from "../src/modules/telemetry/telemetry.service";
import { prisma } from "../src/lib/prismaClient";
import { CreateTelemetryDTO } from "../src/modules/telemetry/telemetry.types";

// Mock Prisma client
jest.mock("../src/lib/prismaClient", () => ({
  prisma: {
    telemetry: {
      create: jest.fn(),
      findMany: jest.fn(),
    },
  },
}));

describe("TelemetryService", () => {
  const mockTelemetry: Telemetry = {
    id: "1",
    timestamp: new Date(),
    payload: 5,
    sensorId: "sensor1",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("createTelemetry", () => {
    it("should create a new telemetry record", async () => {
      const createData: CreateTelemetryDTO = {
        sensorId: "sensor-1",
        payload: 3,
        timestamp: new Date().toISOString(),
      };

      (prisma.telemetry.create as jest.Mock).mockResolvedValue(mockTelemetry);

      const result = await telemetryService.createTelemetry(createData);

      expect(prisma.telemetry.create).toHaveBeenCalledWith({
        data: {
          ...createData,
          payload: createData.payload,
        },
      });
      expect(result).toEqual(mockTelemetry);
    });

    it("should handle null payload", async () => {
      const createData = {
        sensorId: "sensor-1",
        timestamp: new Date().toDateString(),
        payload: null,
      };

      (prisma.telemetry.create as jest.Mock).mockResolvedValue({
        ...mockTelemetry,
        payload: null,
      });

      const result = await telemetryService.createTelemetry(createData);

      expect(prisma.telemetry.create).toHaveBeenCalledWith({
        data: {
          ...createData,
          payload: null,
        },
      });
      expect(result.payload).toBeNull();
    });
  });

  describe("getTelemetry", () => {
    it("should return all telemetry records", async () => {
      const mockRecords = [mockTelemetry];
      (prisma.telemetry.findMany as jest.Mock).mockResolvedValue(mockRecords);

      const result = await telemetryService.getTelemetery();

      expect(prisma.telemetry.findMany).toHaveBeenCalledWith({});
      expect(result).toEqual(mockRecords);
    });

    it("should return empty array if no records found", async () => {
      (prisma.telemetry.findMany as jest.Mock).mockResolvedValue([]);

      const result = await telemetryService.getTelemetery();

      expect(result).toEqual([]);
    });
  });
});
