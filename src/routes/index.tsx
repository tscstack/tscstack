import { createFileRoute } from "@tanstack/react-router";

import { Button } from "~/components/ui/button";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div>
      <h1>My Indie Space</h1>
      <Button>Click me</Button>
    </div>
  );
}
