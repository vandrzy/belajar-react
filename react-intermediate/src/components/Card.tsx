
interface Props  {
    children: React.ReactNode
}

const Card =({children}: Props) => {
    return (
        <div className="border rounded p-4 shadow">
            {children}
        </div>
    )
}

const Header = ({children}: Props) => {
    return (
        <div className="text-sky-600 text-xl">
            {children}
        </div>
    )
}

const Body = ({children}: Props) => {
    return (
        <div className="text-slate-600">
            {children}
        </div>
    )
}

const Footer = ({children}: Props) => {
    return (
        <div className="text-orange-600 text-sm">
            {children}
        </div>
    )
}

Card.Header = Header
Card.Body = Body
Card.Footer = Footer

export default Card;