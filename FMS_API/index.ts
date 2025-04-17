import { app } from "./src/app";
import { config } from "dotenv";
import logger from "./src/utils/logger";

config();

const PORT = process.env.PORT || 3000;
console.log("--------------");
console.log(process.env.DATABASE_URL);
console.log(process.env.PORT);
console.log(process.env);
console.log("--------------");

// start server
app
  .listen(PORT, async () => {
    logger.info(`Server up and running on port ${PORT}`);
  })
  .on("error", (err) => {
    logger.error("Failed to start the server:", err);
  });

// process.on("SIGTERM", () => {
//   console.debug("SIGTERM signal received: closing HTTP server");
//   server.close(() => {
//     console.debug("HTTP server closed");
//   });
// });
