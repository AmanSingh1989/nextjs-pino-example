import pino from "pino";

const transport = pino.transport({
  targets: [
    {
      target: "pino/file",
      options: { destination: "./logs/nextJs.log", mkdir: true },
      level: process.env.PINO_LOG_LEVEL || "info",
    },
  ],
});

export const logger = pino(transport);
