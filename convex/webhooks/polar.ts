import { Buffer as BufferPolyfill } from "buffer";

globalThis.Buffer = BufferPolyfill;

import { validateEvent } from "@polar-sh/sdk/webhooks";

import { api } from "../_generated/api";
import { httpAction } from "../_generated/server";

export const handlePolarWebhook = httpAction(async (ctx, request) => {
  const rawBody = await request.text();

  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    headers[key.toLowerCase()] = value;
  });

  const event = validateEvent(
    rawBody,
    headers,
    process.env.POLAR_WEBHOOK_SECRET as string
  );

  if (!event) {
    return new Response("Your Polar event request is not valid", {
      status: 400
    });
  }

  switch (event.type) {
    case "order.paid": {
      const externalId = event.data.customer.externalId as string;
      const productId = event.data.productId as string;

      const subscription = event.data.subscription;
      if (!subscription)
        throw new Error("No subscription data in order.paid event");

      const periodStart = subscription.currentPeriodStart.getTime();

      if (!subscription.currentPeriodEnd)
        throw new Error("No currentPeriodStart data");

      // Add extra 1 day to periodEnd to overlaps with Polar's renewal
      const periodEnd =
        subscription.currentPeriodEnd.getTime() + 24 * 60 * 60 * 1000;

      await ctx.runMutation(api.data.polar.updateCreditPlan, {
        userId: externalId,
        productId,
        periodStart,
        periodEnd
      });
      break;
    }

    case "subscription.revoked": {
      const externalId = event.data.customer.externalId as string;
      const now = new Date();

      const periodStart = new Date(
        now.getFullYear(),
        now.getMonth(),
        1
      ).getTime();
      const periodEnd = new Date(
        now.getFullYear(),
        now.getMonth() + 1,
        1
      ).getTime();

      await ctx.runMutation(api.data.polar.updateCreditPlan, {
        userId: externalId,
        productId: "free",
        periodStart,
        periodEnd
      });
      break;
    }
  }

  return new Response(null, {
    status: 200
  });
});
