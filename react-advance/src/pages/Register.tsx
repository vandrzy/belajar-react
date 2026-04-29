import { useState } from "react"
import AuthForm from "../components/AuthForm"
import Modal from "../components/Modal"
import Navbar from "../components/Navbar";


const Register = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="">
            <Navbar/>
            <AuthForm mode="signup" onSubmit={() => setIsOpen(true)}>
                <AuthForm.Username/>
                <AuthForm.Email/>
                <AuthForm.Password/>
                <AuthForm.ConfirmPassword/>
                <AuthForm.Submit/>
            </AuthForm>
            <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
                Success Regis
            </Modal> 
        </div>
    )
}

export default Register;