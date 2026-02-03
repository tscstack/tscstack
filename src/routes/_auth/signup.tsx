import { createFileRoute } from "@tanstack/react-router";

import { SignUp } from "@clerk/tanstack-react-start";

import { seoMeta } from "~/utils/seo";

export const Route = createFileRoute("/_auth/signup")({
  head: ({ match }) => ({
    meta: seoMeta({ title: "Sign Up", url: match.fullPath })
  }),
  component: RouteComponent
});

function RouteComponent() {
  return <SignUp />;
}
