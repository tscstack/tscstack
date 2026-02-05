import { createFileRoute } from "@tanstack/react-router";

import { seoMeta } from "~/utils/seo";

export const Route = createFileRoute("/")({
  component: App,
  head: ({ match }) => ({
    meta: seoMeta({ title: "default", url: match.fullPath })
  })
});

function App() {
  return <p>This is index page</p>;
}
