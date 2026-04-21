

interface Props {
    handleTrigger: () => void;
    isTrigger: boolean;
}

const HiddenItems = ({handleTrigger, isTrigger}: Props) => {
    return (
        <div>
            <button className="bg-sky-500 p-2 text-white" onClick={handleTrigger}>klik</button>
            {isTrigger && <div className="text-2xl">Komponen tersembunyi</div>}
        </div>
    )
} 


export default HiddenItems;