import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  betaSignups: defineTable({
    name: v.string(),
    email: v.string(),
    farmName: v.optional(v.string()),
    isFarmer: v.boolean(),
    message: v.optional(v.string()),
    status: v.string(), // "pending", "approved", "rejected"
  }).index("by_email", ["email"]),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
