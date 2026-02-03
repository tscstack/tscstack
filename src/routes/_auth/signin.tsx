import { createFileRoute } from "@tanstack/react-router";

import { SignIn } from "@clerk/tanstack-react-start";

export const Route = createFileRoute("/_auth/signin")({
  component: RouteComponent
});

function RouteComponent() {
  return <SignIn />;
}
