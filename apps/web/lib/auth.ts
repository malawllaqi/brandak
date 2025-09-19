import { auth } from "@workspace/auth/server";
import { headers } from "next/headers";

export async function currentUser() {
  return await auth.api.getSession({
    headers: await headers(),
  });
}
