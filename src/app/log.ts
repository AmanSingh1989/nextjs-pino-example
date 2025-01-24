"use server";

import { logger } from "./logger";

export const log = () => {
  try {
    console.log("my my my");
    logger.debug("This debug message will not be logged");
    logger.info("This info message will be logged");
    logger.warn("has reached home");
  } catch (error) {
    console.log(error);
  }
};
