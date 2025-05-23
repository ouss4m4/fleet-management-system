import express, { Request, Response, NextFunction } from "express";
import { apiv1router } from "./routes/apiv1.router";
import cors from "cors";
import { join } from "path";
import requestLogger from "./middleware/requestLogger";

const app = express();

// Middlewarez
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(requestLogger);

app.use(express.static(join(__dirname, "../public")));

app.get("/ping", (_, res: Response) => {
  res.status(200).send("pong");
});
// Add API Routes
app.use("/api/v1", apiv1router);

app.get("/*splat", (_, res) => {
  res.sendFile(join(__dirname, "../public/index.html"));
});

// Catch all error handler
interface ErrorWithStatus extends Error {
  status?: number;
}

app.use((err: ErrorWithStatus, _: Request, res: Response, __: NextFunction) => {
  const statusCode = err.status || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? "X" : err.stack,
  });
});

export { app };
