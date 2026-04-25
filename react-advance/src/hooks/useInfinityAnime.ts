import { useInfiniteQuery } from "@tanstack/react-query"
import { animeService } from "../services/animeService"


const useInfinityAnime = () => {
    return useInfiniteQuery({
        queryKey: ["animeAll"],
        queryFn: () => animeService.getAnimes(1),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            if (lastPage.hasNextPage){
                return lastPage.pageNumber + 1;
            }
            return undefined
        }

    });
};

export default useInfinityAnime;