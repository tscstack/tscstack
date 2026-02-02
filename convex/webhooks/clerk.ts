import { verifyWebhook } from "@clerk/backend/webhooks";

import { api } from "../_generated/api";
import { httpAction } from "../_generated/server";
import { polar } from "../libs/polar";

export const handleClerkWebhook = httpAction(async (ctx, request) => {
  const event = await verifyWebhook(request, {
    signingSecret: process.env.CLERK_WEBHOOK_SECRET
  });
  if (!event) {
    return new Response("Your Clerk event request is not valid", {
      status: 400
    });
  }

  switch (event.type) {
    case "user.created": {
      // Create Polar customer
      await polar.customers.create({
        externalId: event.data.id,
        email: event.data.email_addresses[0].email_address,
        name: `${event.data.first_name} ${event.data.last_name}`
      });

      // TODO: Process Convex mutations

      // Example:
      await ctx.runMutation(api.data.polar.createFreeCredit, {
        userId: event.data.id
      });

      break;
    }
    case "user.deleted": {
      break;
    }
  }

  return new Response(null, {
    status: 200
  });
});
