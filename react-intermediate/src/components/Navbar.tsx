import { useUser } from "../hooks/useUser"


const Navbar = () => {
    const {user, setUser} = useUser();
    return (
        <nav className="flex p-4 items-center">
            <h1 className="text-xl text-sky-600">{user?.name}</h1>
            <p className="text-slate-400">{user?.age}</p>
        </nav>
    )
}

export default Navbar