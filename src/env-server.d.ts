declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: "development" | "production";
      readonly CONVEX_DEPLOYMENT: string;
      readonly CLERK_SECRET_KEY: string;
      readonly CLERK_FRONTEND_API_URL: string;
      readonly CLERK_WEBHOOK_SECRET: string;
      readonly POLAR_SERVER: "sandbox" | "production";
      readonly POLAR_ACCESS_TOKEN: string;
      readonly POLAR_WEBHOOK_SECRET: string;
      readonly VITE_PRO_MONTHLY: string;
    }
  }
}

export {};
