import { createEnv } from "@t3-oss/env-nextjs";

export const keys = () =>
  createEnv({
    server: {
      // BETTER_AUTH_SECRET: z.string().min(1),
    },
    experimental__runtimeEnv: process.env,
  });
