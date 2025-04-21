import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const submit = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    farmName: v.optional(v.string()),
    isFarmer: v.boolean(),
    message: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Check if email already exists
    const existing = await ctx.db
      .query("betaSignups")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();

    if (existing) {
      throw new Error("Email already registered for beta");
    }

    await ctx.db.insert("betaSignups", {
      ...args,
      status: "pending",
    });
  },
});
