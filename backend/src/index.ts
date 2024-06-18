import dotenv from "dotenv";

import http from "http";
import app from "./app";
import logger from "./helpers/winston/dev_logger";

dotenv.config();

const server = http.createServer(app);
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  logger.info(`[Server]: Server is running at http://localhost:${PORT}`)
});
