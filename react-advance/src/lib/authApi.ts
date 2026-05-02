import axios from "axios";


const authApi = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true
})
authApi.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
authApi.interceptors.response.use((response) => response, async(error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry){
        originalRequest._retry = true;
        try{
            const refreshResponse = await authApi.post("/auth/refresh");
            const newAccessToken = refreshResponse.data.token;
            localStorage.setItem("accessToken", newAccessToken);
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return authApi(originalRequest);
        }catch{
            localStorage.removeItem("accessToken");
            window.location.href = "/login"
        }
    }
    return Promise.resolve(error);
})
export default authApi;