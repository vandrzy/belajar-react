import { useState } from "react"
import AuthForm from "../components/AuthForm"
import Modal from "../components/Modal"
import Navbar from "../components/Navbar";
import useLogin from "../hooks/useLogin";
import type { LoginPayload } from "../type/Auth";

type ModalState = {
type: "success" | "error";
message: string;
timestamps: string;
data?:  {
    login: boolean;
    token: string
    }
}
const Login = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState<ModalState| null>(null);
    const loginMutation = useLogin();
    const handleSubmit = async (data: LoginPayload, resetForm: () => void) => {
        try{
            const response = await loginMutation.mutateAsync(data);
            setModalData({type: "success", message: response.message, timestamps: response.timestamps, data: response.data});
            localStorage.setItem("accessToken", response.data.token);
            resetForm();
        }catch(error: any){
            setModalData({type: "error", timestamps: error.response?.data?.timestamps, message: error.response?.data?.message ?? "ada yang salah"});
        }finally{
            setIsOpen(true);
        }
    }

    
    return (
        <div className="">
            <Navbar/>
            <AuthForm mode="login" onSubmit={handleSubmit}>
                <AuthForm.Email/>
                <AuthForm.Password/>
                <AuthForm.Submit/>
            </AuthForm>
            <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
                <h2>{modalData?.type}</h2>
                <p>{modalData?.timestamps}</p>
                <p>{modalData?.message}</p>
                {modalData?.type === "success" && <div>
                    <p>{modalData.data?.login}</p>
                    <p>{modalData.data?.token}</p>
                    </div>}
            </Modal> 
        </div>
    )
}

export default Login;