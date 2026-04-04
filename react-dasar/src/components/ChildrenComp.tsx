
interface Props{
    children: React.ReactNode;
}

const ChildrenProps = ({children}: Props) => {
    return (
        <div>
            <p>dipanggil menggunakan children props</p>
            {children}
        </div>
    )
}

export default ChildrenProps;