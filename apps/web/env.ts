import { createEnv } from "@t3-oss/env-nextjs";
// import { keys as auth } from "@workspace/auth/keys";
import { keys as db } from "@workspace/db/keys";

export const env = createEnv({
  extends: [
    // auth(),
    db(),
  ],
  server: {},
  client: {},
  runtimeEnv: {},
});
