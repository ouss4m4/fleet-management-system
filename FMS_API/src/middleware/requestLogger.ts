import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger";

// Configuration interface
interface RequestLoggerConfig {
  logHeaders?: boolean;
  logBody?: boolean;
}

// Default configuration
const defaultConfig: RequestLoggerConfig = {
  logHeaders: false,
  logBody: false,
};

export const createRequestLogger = (
  config: RequestLoggerConfig = defaultConfig
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // Start time
    const start = Date.now();

    // Log request details
    const requestDetails = {
      method: req.method,
      url: req.url,
      ip: req.ip,
      headers: config.logHeaders ? req.headers : undefined,
      body: config.logBody ? req.body : undefined,
    };

    logger.info("Incoming Request", requestDetails);

    // Capture response data
    res.on("finish", () => {
      const duration = Date.now() - start;
      const responseDetails = {
        status: res.statusCode,
        duration: `${duration}ms`,
      };

      // Log based on status code
      if (res.statusCode >= 500) {
        logger.error("Request Completed", {
          ...requestDetails,
          ...responseDetails,
        });
      } else if (res.statusCode >= 400) {
        logger.warn("Request Completed", {
          ...requestDetails,
          ...responseDetails,
        });
      } else {
        logger.info("Request Completed", {
          ...requestDetails,
          ...responseDetails,
        });
      }
    });

    next();
  };
};

// Export default middleware with default configuration
export default createRequestLogger();
