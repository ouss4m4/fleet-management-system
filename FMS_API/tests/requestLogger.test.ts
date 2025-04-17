import { Request, Response, NextFunction } from "express";
import { createRequestLogger } from "../src/middleware/requestLogger";
import logger from "../src/utils/logger";

// Mock the logger
jest.mock("../src/utils/logger", () => ({
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
}));

describe("Request Logger Middleware", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;
  let requestLogger: any;

  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks();

    // Setup mock request
    mockRequest = {
      method: "GET",
      url: "/test",
      ip: "127.0.0.1",
      headers: {
        "user-agent": "jest-test",
      },
    };

    // Setup mock response
    mockResponse = {
      statusCode: 200,
      on: jest.fn(((event: string | symbol, callback: (...args: any[]) => void) => {
        if (event === "finish") {
          callback();
        }
        return mockResponse as Response;
      }) as Response["on"]),
    };

    mockNext = jest.fn();
    requestLogger = createRequestLogger();
  });

  it("should log incoming request", () => {
    requestLogger(mockRequest as Request, mockResponse as Response, mockNext);

    expect(logger.info).toHaveBeenCalledWith("Incoming Request", {
      method: "GET",
      url: "/test",
      ip: "127.0.0.1",
      headers: undefined,
      body: undefined,
    });
  });

  it("should log completed request with status code", () => {
    requestLogger(mockRequest as Request, mockResponse as Response, mockNext);

    expect(logger.info).toHaveBeenCalledWith(
      "Request Completed",
      expect.objectContaining({
        method: "GET",
        url: "/test",
        ip: "127.0.0.1",
        status: 200,
      })
    );
  });

  it("should log error for 5xx status codes", () => {
    mockResponse.statusCode = 500;

    requestLogger(mockRequest as Request, mockResponse as Response, mockNext);

    expect(logger.error).toHaveBeenCalledWith(
      "Request Completed",
      expect.objectContaining({
        status: 500,
      })
    );
  });

  it("should log warning for 4xx status codes", () => {
    mockResponse.statusCode = 404;

    requestLogger(mockRequest as Request, mockResponse as Response, mockNext);

    expect(logger.warn).toHaveBeenCalledWith(
      "Request Completed",
      expect.objectContaining({
        status: 404,
      })
    );
  });

  it("should include headers when configured", () => {
    const loggerWithHeaders = createRequestLogger({ logHeaders: true });

    loggerWithHeaders(mockRequest as Request, mockResponse as Response, mockNext);

    expect(logger.info).toHaveBeenCalledWith(
      "Incoming Request",
      expect.objectContaining({
        headers: { "user-agent": "jest-test" },
      })
    );
  });
});
