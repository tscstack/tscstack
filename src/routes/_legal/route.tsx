import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

import { ArrowLeft } from "lucide-react";

import { Button } from "~/components/ui/button";

export const Route = createFileRoute("/_legal")({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <div className="m-auto mt-15 max-w-4xl">
      <Button variant="outline" size="sm" asChild>
        <Link to="/">
          <ArrowLeft />
          Back
        </Link>
      </Button>
      <Outlet />
    </div>
  );
}
