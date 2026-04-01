import { useEffect, useState } from "react";
import type { ImageResponse } from "../types/ImageItem";

const ImageData = () => {
    const [data, setData] = useState<ImageResponse| null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string| null>(null);
    const controller = new AbortController()
    useEffect(() => {
        const fetchData = async() => {
            try{
                setIsLoading(true);
                setError(null);
                const response = await fetch("https://api.waifu.im/images");
                const data = await response.json()
                setData(data)
            }catch (err){
                setError("Gagal mengambil data user")
            }finally{
                setIsLoading(false)
            }
        }

        fetchData()

        return () => {
            controller.abort()
        }

        
    }, [])
    
    return (
        <div>
            {isLoading && <p>loading....</p>}
            {error && <p>{error}</p>}
            {!isLoading && !error && data && (
                
                    <div>

                        <p>{data.pageNumber}</p>
                        <p>{data.totalPage}</p>
                        {data.items.map(image => (
                            <img key={image.id} src={image.url} width="200" alt="" />
                        ))}
                    </div>
                
            )}
        </div>
    )
}

export default ImageData;