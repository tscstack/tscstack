import { useEffect, useState } from "react";

export const PostHogProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [Provider, setProvider] = useState<React.ComponentType<{
    children: React.ReactNode;
  }> | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const baseUrl = import.meta.env.VITE_BASE_URL ?? "";
    if (baseUrl.includes("localhost")) return;

    Promise.all([import("posthog-js"), import("posthog-js/react")]).then(
      ([posthog, react]) => {
        posthog.default.init(import.meta.env.VITE_POSTHOG_KEY, {
          api_host: import.meta.env.VITE_POSTHOG_HOST
        });

        setProvider(() => ({ children }: { children: React.ReactNode }) => (
          <react.PostHogProvider client={posthog.default}>
            {children}
          </react.PostHogProvider>
        ));
      }
    );
  }, []);

  if (!Provider) return children;

  return <Provider>{children}</Provider>;
};
