import { useAnime } from "../hooks/useAnime";
import useTriggered from "../hooks/useTriggered"


const ImageAnime = () => {
    const {triggered, updateTriggered} = useTriggered();
    const {data, errors, isLoading} = useAnime([triggered]);

    return (
        <div>
            {isLoading && <p>Components sedang loading</p>}
            {errors && <p>{errors}</p>}
            {!isLoading && <button className="border border-solid border-blue-400 rounded-md bg-green-400" onClick={updateTriggered}>Refresh</button>}
            {!isLoading && !errors && data && <div>
                {data.items.map(image => (
                    <div key={image.id}>
                        <img  src={image.url} width="300" alt="" />
                        {image.artists?.map(artist =>(
                            <div key={artist.id}>
                                <p className="text-blue-500">{artist.name}</p>
                                <p>{artist.twitter}</p>
                            </div>
                        ))}
                    </div>
                ))}
                </div>} 
        </div>
    )
}

export default ImageAnime;