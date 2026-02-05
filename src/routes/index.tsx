import { createFileRoute, Link } from "@tanstack/react-router";

import { SignInButton, UserButton } from "@clerk/tanstack-react-start";
import { Authenticated, Unauthenticated } from "convex/react";

import { Button } from "~/components/ui/button";
import { seoMeta } from "~/utils/seo";

export const Route = createFileRoute("/")({
  component: App,
  head: ({ match }) => ({
    meta: seoMeta({ title: "default", url: match.fullPath })
  })
});

function App() {
  return (
    <div>
      <p>This is index page</p>

      <div className="mt-3">
        <Unauthenticated>
          <SignInButton
            mode="modal"
            forceRedirectUrl="/dashboard"
            signUpForceRedirectUrl="/dashboard"
          >
            <Button variant="default" size="sm">
              Sign In / Sign Up
            </Button>
          </SignInButton>
        </Unauthenticated>

        <Authenticated>
          <Button variant="default" size="sm" className="mr-1" asChild>
            <Link to="/dashboard">Dashboard</Link>
          </Button>
          <UserButton />
        </Authenticated>
      </div>
    </div>
  );
}
