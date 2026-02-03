import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App
});

function App() {
  return <p>This is index page</p>;
}
