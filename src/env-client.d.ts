interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_CONVEX_URL: string;
  readonly VITE_CLERK_PUBLISHABLE_KEY: string;
  readonly VITE_PRO_MONTHLY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
