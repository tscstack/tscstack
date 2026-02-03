import { createFileRoute } from "@tanstack/react-router";

import { SignUp } from "@clerk/tanstack-react-start";

export const Route = createFileRoute("/_auth/signup")({
  component: RouteComponent
});

function RouteComponent() {
  return <SignUp />;
}
