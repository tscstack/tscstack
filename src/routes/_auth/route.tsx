import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

import { ArrowLeft } from "lucide-react";

import { Button } from "~/components/ui/button";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <div className="w-full h-full p-3">
      <Button variant="outline" size="sm" asChild>
        <Link to="/">
          <ArrowLeft />
          Back
        </Link>
      </Button>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Outlet />
      </div>
    </div>
  );
}
