import axios from "axios";
import type {AxiosRequestConfig} from "axios";


const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const apiRequest = async <T,>({method = "GET", url, data, params}: AxiosRequestConfig):Promise<T> => {
    const response = await api({method, url, data, params});
    return response.data;
}