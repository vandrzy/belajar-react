import { useQuery } from "@tanstack/react-query"
import { animeService } from "../services/animeService"


const useAnime = (page: number) => {
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ["animes", page],
        queryFn: () => animeService.getAnimes(page),
        staleTime: 1000 * 60 * 10,
        gcTime: 1000 * 60 * 30,
        retry: 2,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
        refetchOnMount: false, 
        placeholderData: (prevousData) => prevousData,
    });

    return {data, isLoading, isError, error}
}

export default useAnime;