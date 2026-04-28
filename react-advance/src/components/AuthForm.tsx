import { createContext, useContext, useState, type ReactNode } from "react";

type Mode = "login"|"signup"
type AuthContextType = {
    mode: Mode;
    username: string;
    email: string;
    password: string;
    comfirmPassword: string;

    setUsername: (value: string)=>void;
    setEmail: (value: string)=>void;
    setPassword: (value: string)=>void;
    setComfirmPassword: (value: string)=>void;

    handleSubmit: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);
const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context){
        throw new Error("context tidak ada");
    }

    return context;
}


interface AuthFormProps {
    children: ReactNode,
    mode: Mode
}

const AuthForm = ({children, mode}: AuthFormProps) => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [comfirmPassword, setComfirmPassword] = useState("")

    const handleSubmit = () => {
        if (mode === "login"){
            console.log("login")
        }
        if (mode === "signup"){
            console.log("signUp")
        }
    }

    return (
        <AuthContext.Provider value={{mode, username, email, password, comfirmPassword, setUsername, setEmail, setPassword, setComfirmPassword, handleSubmit}}>
            <div className="p-4 flex flex-col items-center justify-center gap-4 w-80">
                {children}
            </div>

        </AuthContext.Provider>
    )
}

const Username = () => {
    const {username, setUsername} = useAuthContext();

    return (
        <div className="flex flex-col gap-0.5">
            <label htmlFor="username" className="text-slate-600">Username</label>
            <input id="usename" type="text" placeholder="Type username...." value={username} onChange={(e) => setUsername(e.target.value)} className="p-1 border-solid border-2 rounded-sm w-full border-slate-600 focus:border-sky-400 focus:outline-none"/>
        </div>
    )
}

const Password = () => {
    const {password, setPassword} = useAuthContext();

    return (
        <div className="flex flex-col gap-0.5">
            <label htmlFor="password" className="text-slate-600">Password</label>
            <input id="password" type="password" placeholder="Type password...." value={password} onChange={(e) => setPassword(e.target.value)} className="p-1 border-solid border-2 rounded-sm w-full border-slate-600 focus:border-sky-400 focus:outline-none"/>
        </div>
    )
}

const ConfirmPassword = () => {
    const {comfirmPassword, setComfirmPassword} = useAuthContext();

    return (
        <div className="flex flex-col gap-0.5">
            <label htmlFor="comfirmPassword" className="text-slate-600">Comfirm Password</label>
            <input id="comfirmPassword" type="comfirmPassword" placeholder="Type comfirmPassword...." value={comfirmPassword} onChange={(e) => setComfirmPassword(e.target.value)} className="p-1 border-solid border-2 rounded-sm w-full border-slate-600 focus:border-sky-400 focus:outline-none"/>
        </div>
    )
}

const Email =() => {
    const {email, setEmail} = useAuthContext();

    return (
        <div className="flex flex-col gap-0.5">
            <label htmlFor="email" className="text-slate-600">Comfirm Password</label>
            <input id="email" type="email" placeholder="Type email...." value={email} onChange={(e) => setEmail(e.target.value)} className="p-1 border-solid border-2 rounded-sm w-full border-slate-600 focus:border-sky-400 focus:outline-none"/>
        </div>
    )
}

const Submit =  () => {
    const {handleSubmit, mode} = useAuthContext()
    return (
        <button onClick={handleSubmit} className="bg-blue-400 px-4 py-2 rounded">
            {mode === "login" ? "Log In" : "Sign Up"}
        </button>
    )
}

AuthForm.Username = Username;
AuthForm.Password = Password;
AuthForm.ConfirmPassword = ConfirmPassword;
AuthForm.Email = Email;
AuthForm.Submit = Submit;

export default AuthForm;