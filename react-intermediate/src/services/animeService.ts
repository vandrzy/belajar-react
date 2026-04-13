import { apiRequest } from "../lib/api"
import type { Anime } from "../types/Anime"


export const animeService = {
    getAnimes(){
        return apiRequest<Anime>({url: "/images"})
    }
}