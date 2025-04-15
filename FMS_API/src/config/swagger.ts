// src/config/swagger.ts
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Fleet Management System",
      version: "1.0.0",
      description: "API for fleet management and monitoring",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}/api/v1`,
      },
    ],
  },
  apis: [path.resolve(__dirname, "../modules/**/*.docs")],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
