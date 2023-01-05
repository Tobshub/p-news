import { QueryClient, QueryCache } from "react-query";

export const homeQuery = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retryDelay: 1000,
    },
  },
});
