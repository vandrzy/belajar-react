import React from "react";
import type { ImageItem } from "../type/Anime";

interface Props {
    anime : ImageItem
}


const ImageCard = React.memo(({anime}: Props) => {

    return (
        <div>
            <img src={anime.url} alt="" className="w-32"/>
            {anime.artists.map((artist) => (
                <div key={artist.id}>
                    <p>{artist.name}</p>
                    <p>{artist.pixiv}</p>
                </div>
            ))}
        </div>
    )

} )


export default ImageCard;