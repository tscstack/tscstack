import { createFileRoute } from "@tanstack/react-router";

import { SignIn } from "@clerk/tanstack-react-start";

import { seoMeta } from "~/utils/seo";

export const Route = createFileRoute("/_auth/signin")({
  head: ({ match }) => ({
    meta: seoMeta({ title: "Sign In", url: match.fullPath })
  }),
  component: RouteComponent
});

function RouteComponent() {
  return <SignIn />;
}
