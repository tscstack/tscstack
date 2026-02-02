import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  credits: defineTable({
    userId: v.string(),
    plan: v.string(),
    used: v.number(),
    total: v.number(),
    periodStart: v.number(),
    periodEnd: v.number()
  }).index("by_userId", ["userId"])
});
