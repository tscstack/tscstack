import type { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: process.env.CLERK_FRONTEND_API_URL as string,
      applicationID: "convex"
    }
  ]
} satisfies AuthConfig;
