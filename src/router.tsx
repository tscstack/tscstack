import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";

import { ConvexQueryClient } from "@convex-dev/react-query";

import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const convexQueryClient = new ConvexQueryClient(
    import.meta.env.VITE_CONVEX_URL
  );
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryKeyHashFn: convexQueryClient.hashFn(),
        queryFn: convexQueryClient.queryFn()
      }
    }
  });
  convexQueryClient.connect(queryClient);

  const router = routerWithQueryClient(
    createRouter({
      routeTree,
      context: { queryClient },
      scrollRestoration: true,
      defaultPreloadStaleTime: 0
    }),
    queryClient
  );

  return router;
};
