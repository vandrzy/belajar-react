import { apiRequest } from "../lib/api"
import type { Anime } from "../type/Anime"


export const animeService = {
    getAnimes(page: number){
        return apiRequest<Anime>({url: "/images", params: {PageSize: 10, Page:page}})
    }
}