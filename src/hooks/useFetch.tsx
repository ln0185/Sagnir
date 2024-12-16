import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useFetch = (url: string): UseQueryResult<any, Error> => {
  return useQuery({
    queryKey: [url],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
    staleTime: 600 * 10,
    retry: 1,
  });
};
