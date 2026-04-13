import { useEffect, useState } from "react"
import { animeService } from "../services/animeService";
import type { Anime } from "../types/Anime";


export const useAnime = (deps: any[] = [])  => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<Anime| null>();
    const [errors, setErrors] = useState<string| null>();

    useEffect(() => {
        const fetchAnime = async () => {
            try{
                setIsLoading(true);
                const response = await animeService.getAnimes();
                setData(response);
            }catch{
                setErrors("Gagal mengambil data");
            }finally{
                setIsLoading(false);
            }
        }
        fetchAnime();
    }, [...deps])

    return {isLoading, data, errors};

}