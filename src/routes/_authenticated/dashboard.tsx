import { createFileRoute } from "@tanstack/react-router";

import { UserButton } from "@clerk/tanstack-react-start";

import { seoMeta } from "~/utils/seo";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: ({ match }) => ({
    meta: seoMeta({ title: "Dashboard", url: match.fullPath })
  }),
  component: RouteComponent
});

function RouteComponent() {
  return (
    <div>
      Hello "/_authenticated/dashboard"! <UserButton />
    </div>
  );
}
