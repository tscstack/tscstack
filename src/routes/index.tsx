import { createFileRoute } from "@tanstack/react-router";

import { BuiltWithIndieShip } from "~/components/built-with-indie-ship";

export const Route = createFileRoute("/")({
  component: App
});

function App() {
  return (
    <p>
      This is index page <BuiltWithIndieShip />
    </p>
  );
}
