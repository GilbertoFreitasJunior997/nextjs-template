import { z } from "zod";

export const zodErrorMap: z.ZodErrorMap = (issue, ctx) => {
  if (issue.code === "too_small") {
    if (issue.type === "string") {
      return {
        message: `Please enter at least ${issue.minimum} characters`,
      };
    }
  }

  return {
    message: ctx.defaultError,
  };
};
