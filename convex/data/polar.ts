import { v } from "convex/values";

import {
  action,
  type MutationCtx,
  mutation,
  type QueryCtx,
  query
} from "../_generated/server";
import { polar, polar as polarClient } from "../libs/polar";
import { requireIdentity } from "./auth";

export async function getUserCredit(
  ctx: QueryCtx | MutationCtx,
  userId?: string
) {
  const credit = await ctx.db
    .query("credits")
    .withIndex("by_userId", (q) => q.eq("userId", userId || ""))
    .first();

  return credit;
}

const PLANS = {
  free: {
    productId: "free",
    name: "Free",
    price: 0,
    totalCredits: 5
  },
  professional: {
    productId: process.env.VITE_PRO_MONTHLY as string,
    name: "Pro",
    price: 29,
    totalCredits: 500
  }
} as const;

export const createFreeCredit = mutation({
  args: {
    userId: v.string()
  },
  handler: async (ctx, args) => {
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

    await ctx.db.insert("credits", {
      userId: args.userId,
      plan: PLANS.free.name,
      used: 0,
      total: PLANS.free.totalCredits,
      periodStart,
      periodEnd
    });
  }
});

export const updateCreditPlan = mutation({
  args: {
    userId: v.string(),
    productId: v.string(),
    periodStart: v.number(),
    periodEnd: v.number()
  },
  handler: async (ctx, args) => {
    const credit = await getUserCredit(ctx, args.userId);
    if (!credit) throw new Error("No credit record found");

    let planConfig: { name: string; price: number; totalCredits: number };

    if (args.productId === PLANS.free.productId) {
      planConfig = PLANS.free;
    } else if (args.productId === PLANS.professional.productId) {
      planConfig = PLANS.professional;
    } else {
      throw new Error(`Unknown product ID: ${args.productId}`);
    }

    await ctx.db.patch(credit._id, {
      plan: planConfig.name,
      used: 0,
      total: planConfig.totalCredits,
      periodStart: args.periodStart,
      periodEnd: args.periodEnd
    });
  }
});

export const getCredit = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();

    return await getUserCredit(ctx, identity?.subject);
  }
});

export const getActiveSubscription = query({
  args: {},
  handler: async (ctx) => {
    const identity = await requireIdentity(ctx);

    const customerState = await polarClient.customers.getStateExternal({
      externalId: identity.subject
    });

    const activeSubscription = customerState.activeSubscriptions[0];

    return activeSubscription;
  }
});

export const getPolarCustomer = query({
  args: {},
  handler: async (ctx) => {
    const identity = await requireIdentity(ctx);

    return await polarClient.customers.getExternal({
      externalId: identity.subject
    });
  }
});

export const generateCheckoutUrl = action({
  args: {},
  handler: async (ctx) => {
    const identity = await requireIdentity(ctx);

    const checkout = await polar.checkouts.create({
      successUrl: `${process.env.VITE_BASE_URL}/dashboard`,
      externalCustomerId: identity.subject,
      products: [PLANS.professional.productId],
      allowDiscountCodes: true
    });

    return checkout.url;
  }
});

export const generatePortalUrl = action({
  args: {},
  handler: async (ctx) => {
    const identity = await requireIdentity(ctx);

    const { customerPortalUrl } = await polar.customerSessions.create({
      externalCustomerId: identity.subject,
      returnUrl: `${process.env.VITE_BASE_URL}/dashboard`
    });

    return customerPortalUrl;
  }
});
