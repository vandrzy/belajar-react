

interface Props {
    isPrimary: boolean;
    text: string;
    callback: () => void
}

const AppButton = ({isPrimary, text, callback}: Props) => {

    return (
        <button onClick={callback} className={`py-1 px-2 font-bold text-lg rounded-lg text-white ${isPrimary ? "bg-sky-500" : "bg-red-500"}`}>{text}</button>
    )

}

export default AppButton;