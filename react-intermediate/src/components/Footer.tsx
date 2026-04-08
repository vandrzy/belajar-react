import { useUser } from "../hooks/useUser"


const Footer = () => {
    const {user, setUser} = useUser();
    return (
        <footer className="flex p-4 items-center">
            <h1 className="text-xl text-green-600">{user?.name}</h1>
            <p className="text-sky-400">{user?.age}</p>
        </footer>
    )
}

export default Footer