import { useQuery } from "@tanstack/react-query";

export const useFetch = (url: string) => {
    const { data, isLoading, error } = useQuery({
        queryKey: [url],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        },
        staleTime: 600 * 10,
        retry: 1
    })

    return { data, isLoading, error }
}