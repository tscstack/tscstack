import { httpRouter } from "convex/server";

import { handleClerkWebhook } from "./webhooks/clerk";
import { handlePolarWebhook } from "./webhooks/polar";

const http = httpRouter();

http.route({
  path: "/clerk-webhook",
  method: "POST",
  handler: handleClerkWebhook
});

http.route({
  path: "/polar-webhook",
  method: "POST",
  handler: handlePolarWebhook
});

export default http;
