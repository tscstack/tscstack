import { createFileRoute, Outlet } from "@tanstack/react-router";

import { requireAuthFn } from "~/functions/auth";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ location }) => {
    return await requireAuthFn({ data: { href: location.href } });
  },
  component: RouteComponent
});

function RouteComponent() {
  return <Outlet />;
}
