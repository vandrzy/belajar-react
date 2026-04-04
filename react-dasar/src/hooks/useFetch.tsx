import { useEffect, useState } from "react"



const useFetch = <T,>(url: string, deps: any[] = []) => {
    const [data, setData] = useState<T| null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const controller = new AbortController();
        const fetchAPI = async() => {
            try {
                setIsLoading(true);
                const res = await fetch(url, {signal: controller.signal});
                const data = await res.json();
                setData(data);
                
            } catch (error) {
                if (error instanceof Error && error.name !== "AbortError") {
                setError("Gagal mengambil data");
                }
            }finally{
                setIsLoading(false);
            }
        }
        fetchAPI();
        return () => {
        controller.abort()
    }
    }, [...deps]);

    return {data, isLoading, error};
    
}

export default useFetch;