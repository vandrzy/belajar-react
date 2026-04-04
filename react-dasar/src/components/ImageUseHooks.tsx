import useFetch from "../hooks/useFetch"
import useTriggered from "../hooks/useTriggered";
import type { ImageResponse } from "../types/ImageItem";

const ImageUseHooks = () => {
    const {triggered, updateTriggered} = useTriggered();
    const {data, isLoading, error} = useFetch<ImageResponse>("https://api.waifu.im/images", [triggered]);

    return(
        <div>
            {isLoading && <p>Components sedang loading</p>}
            {error && <p>{error}</p>}
            {!isLoading && <button onClick={updateTriggered}>Refresh</button>}
            {!isLoading && !error && data && <div>
                {data.items.map(image => (
                    <div key={image.id}>
                        <img  src={image.url} width="300" alt="" />
                        {image.artists?.map(artist =>(
                            <div key={artist.id}>
                                <p>{artist.name}</p>
                                <p>{artist.twitter}</p>
                            </div>
                        ))}
                    </div>
                ))}
                </div>} 
        </div>
    )
}

export default ImageUseHooks;