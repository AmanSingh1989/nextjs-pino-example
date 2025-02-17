import pino from "pino";
import "pino-roll";

export const logger = pino({
  transport: {
    target: "pino-roll",
    options: {
      file: "/app/logs/nextJs.log",
      frequency: "hourly",
      mkdir: true,
    },
  },
});
