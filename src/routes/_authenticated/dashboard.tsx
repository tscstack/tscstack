import { createFileRoute } from "@tanstack/react-router";

import { UserButton } from "@clerk/tanstack-react-start";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <div>
      Hello "/_authenticated/dashboard"! <UserButton />
    </div>
  );
}
