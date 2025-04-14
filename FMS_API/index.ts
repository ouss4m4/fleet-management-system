import { app } from "./src/app";
import { config } from "dotenv";

config();

const PORT = process.env.PORT || 3000;
console.log(PORT);
//start db client

// start server
app
  .listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
  })
  .on("error", (err) => {
    console.error("Failed to start the server:", err);
  });

// process.on("SIGTERM", () => {
//   console.debug("SIGTERM signal received: closing HTTP server");
//   server.close(() => {
//     console.debug("HTTP server closed");
//   });
// });
