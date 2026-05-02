import { createContext, useContext, useState, type ReactNode } from "react";
import { loginSchema, signUpSchema } from "../schemas/authSchema";
import type { LoginPayload, SignUpPayload } from "../type/Auth";

type Mode = "login"|"signup"
type AuthContextType = {
    mode: Mode;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    errors: Record<string, string>

    setUsername: (value: string)=>void;
    setEmail: (value: string)=>void;
    setPassword: (value: string)=>void;
    setConfirmPassword: (value: string)=>void;
}

const AuthContext = createContext<AuthContextType | null>(null);
const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context){
        throw new Error("context tidak ada");
    }

    return context;
}


type AuthFormProps =  
|{
    children: ReactNode,
    mode: "signup",
    onSubmit: (payload: SignUpPayload, resetForm: () => void) => void,
}
|{
    children: ReactNode,
    mode: "login",
    onSubmit: (payload: LoginPayload, resetForm: () => void) => void,
}

const AuthForm = ({children, mode, onSubmit}: AuthFormProps) => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errors, setErrors] = useState<Record<string, string>>({});

    const resetForm = () => {
        setUsername("");
        setEmail(""),
        setPassword("");
        setConfirmPassword("");
    }
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = {username, email, password, confirmPassword};
        const schema = mode === "login" ? loginSchema : signUpSchema;
        const result = schema.safeParse(formData);
        if (!result.success) {
            const fieldError: Record<string, string> = {}
            result.error.issues.forEach((err) => {
                const field = err.path[0] as string;
                fieldError[field] = err.message;
            });
            setErrors(fieldError);
            return
        }
        setErrors({});
        console.log(formData);
        
        if (mode === "signup"){
            const payload: SignUpPayload = {
                username, email, password
            }
            onSubmit(payload, resetForm);
        }
        if (mode === "login"){
            const payload: LoginPayload = {
                email, password
            }
            onSubmit(payload, resetForm);
        }
        
    }

    return (
        <AuthContext.Provider value={{mode, username, email, password, confirmPassword, setUsername, setEmail, setPassword, setConfirmPassword, errors}}>
            <form onSubmit={handleSubmit} className="p-4 flex flex-col items-center justify-center gap-4 w-80">
                {children}
            </form>

        </AuthContext.Provider>
    )
}

const Username = () => {
    const {username, setUsername, errors} = useAuthContext();

    return (
        <div className="flex flex-col gap-0.5">
            <label htmlFor="username" className="text-slate-600">Username</label>
            <input id="usename" type="text" placeholder="Type username...." value={username} onChange={(e) => setUsername(e.target.value)} className="p-1 border-solid border-2 rounded-sm w-full border-slate-600 focus:border-sky-400 focus:outline-none"/>
            {errors.username && (<p className="text-red-500">{errors.username}</p>)}
        </div>
    )
}

const Password = () => {
    const {password, setPassword, errors} = useAuthContext();
    
    return (
        <div className="flex flex-col gap-0.5">
            <label htmlFor="password" className="text-slate-600">Password</label>
            <input id="password" type="password" placeholder="Type password...." value={password} onChange={(e) => setPassword(e.target.value)} className="p-1 border-solid border-2 rounded-sm w-full border-slate-600 focus:border-sky-400 focus:outline-none"/>
            {errors.password && (<p className="text-red-500">{errors.password}</p>)}
        </div>
    )
}

const ConfirmPassword = () => {
    const {confirmPassword, setConfirmPassword, errors} = useAuthContext();
    
    return (
        <div className="flex flex-col gap-0.5">
            <label htmlFor="confirmPassword" className="text-slate-600">Comfirm Password</label>
            <input id="confirmPassword" type="confirmPassword" placeholder="Type confirmPassword...." value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="p-1 border-solid border-2 rounded-sm w-full border-slate-600 focus:border-sky-400 focus:outline-none"/>
            {errors.confirmPassword && (<p className="text-red-500">{errors.confirmPassword}</p>)}
        </div>
    )
}

const Email =() => {
    const {email, setEmail, errors} = useAuthContext();
    
    return (
        <div className="flex flex-col gap-0.5">
            <label htmlFor="email" className="text-slate-600">Email</label>
            <input id="email" type="email" placeholder="Type email...." value={email} onChange={(e) => setEmail(e.target.value)} className="p-1 border-solid border-2 rounded-sm w-full border-slate-600 focus:border-sky-400 focus:outline-none"/>
            {errors.email && (<p className="text-red-500">{errors.email}</p>)}
        </div>
    )
}

const Submit =  () => {
    const {mode} = useAuthContext()
    return (
        <button type="submit" className="bg-blue-400 px-4 py-2 rounded">
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