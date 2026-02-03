import { redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

import { auth, clerkClient } from "@clerk/tanstack-react-start/server";
import { z } from "zod";

export const redirectIfAuthenticatedFn = createServerFn({
  method: "GET"
}).handler(async () => {
  const { isAuthenticated } = await auth();

  if (isAuthenticated) {
    throw redirect({ to: "/dashboard" });
  }
});

export const requireAuthFn = createServerFn({ method: "GET" })
  .inputValidator(z.object({ href: z.string().optional() }).optional())
  .handler(async ({ data }) => {
    const { isAuthenticated, userId } = await auth();

    if (!isAuthenticated) {
      throw redirect({ to: "/signin", search: { redirect: data?.href } });
    }

    const user = await clerkClient().users.getUser(userId);

    let name: string;
    if (user?.firstName && user?.lastName) {
      name = `${user.firstName} ${user.lastName}`;
    } else if (user?.firstName) {
      name = user.firstName;
    } else {
      name = "Unknown";
    }

    return { userId, name, email: user.emailAddresses[0].emailAddress };
  });
