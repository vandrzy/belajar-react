import { useState } from "react"
import useUser from "../hooks/useUser";
import Modal from "../components/Modal";
import type { FailedResponse } from "../type/Auth";
import type { AxiosError } from "axios";
import Navbar from "../components/Navbar";

type User = {
    type: "success" | "error";
    message: string;
    timestamps: string;
    data?: {
        username: string;
        email: string;
        role: string;
    }
}
const User = () => {
    const [user, setUser] = useState<User| null>(null);
    const [isOpen, setIsOpen] = useState(false)
    const {refetch} = useUser({enabled: false});
    const handleClick = async () => {
        
            const response = await refetch();
            if(response.data){
                setUser({type: "success", message:response.data.message, timestamps: response.data.timestamps, data: response.data?.data}) 
            }
        
            if (response.error){
                const error = response.error as AxiosError<FailedResponse>;

                setUser({
                    type: "error",
                    message:
                        error.response?.data?.message ??
                        "Ada yang salah",
                    timestamps:
                        error.response?.data?.timestamps ??
                        new Date().toISOString(),
                });
            }
        
            setIsOpen(true);
        
        
    }
    return (
        <div>
            <Navbar />
            <button className="bg-sky-500 p-2 text-white" onClick={handleClick} >User</button>
            <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
                <h2>{user?.type}</h2>
                <p>{user?.message}</p>
                <p>{user?.timestamps}</p>
                {user?.type === "success" && user.data && <div>
                    <p>{user.data?.username}</p>
                    <p>{user.data?.role}</p>
                    <p>{user.data?.email}</p>
                    </div>}
            </Modal>
        </div>
    )
}
export default User;