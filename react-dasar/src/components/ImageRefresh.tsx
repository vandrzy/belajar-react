import type React from "react";
import type { ImageResponse } from "../types/ImageItem";
import { useEffect, useState } from "react";

interface Props {
    status: boolean;
    setStatus: React.Dispatch<React.SetStateAction<boolean>>;

    setData: React.Dispatch<React.SetStateAction<ImageResponse | null>>;

    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;

    setError: React.Dispatch<React.SetStateAction<string| null>>;
}

const ButtonImage = ({status, setStatus,  setData,  setIsLoading, setError}: Props) => {
    useEffect(() => {
        if (!status) return;
        console.log("status berubah");
        const fetchData = async () => {
            try{
                setIsLoading(true);
                const res = await fetch("https://api.waifu.im/images");
                const data = await res.json();
                setData(data);
            }catch(err){
                setError("Gagal mengambil data");
            }finally{
                setIsLoading(false);
                setStatus(false);
            }
        };
        fetchData();
    }, [status]);
    return (
        <div>
            <button onClick={() => setStatus(true)}>ganti</button>
        </div>
    );
}

const ImageContainer = ({data}: {data: ImageResponse}) => {
    return (
        <div>
            <p>{data.pageNumber}</p>
            <p>{data.totalPage}</p>
            <p>{data.hasNextPage}</p>
            {data.items.map((image) => (
                <img key={image.id} src={image.url} width="100" alt="" />
            ))}
        </div>
    )
}

const ImageRefresh = () => {
    const [status, setStatus] = useState<boolean>(false);
    const [data, setData] = useState<ImageResponse| null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    return (
        <div>
            {isLoading && <p>loading....</p>}
            {error && <p>{error}</p>}
            {
               !isLoading && !error && 
                <ButtonImage status={status} setData={setData} setStatus={setStatus} setError={setError} setIsLoading={setIsLoading}/>
            }
            {!isLoading && !error && data &&
            <div>
                <ImageContainer data={data} />
            </div>}
        </div>
    )
}

export default ImageRefresh;