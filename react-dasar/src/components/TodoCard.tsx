import type { ToDo } from "../types/ToDo"
import AppButton from "./Button";

interface Props {
    data: ToDo;
    callbacks:  () => void
}



const ToDoCard = ({data, callbacks}: Props) => {
    return (
        <div className="ml-1 px-3 py-4 flex flex-col gap-4 shadow-xs shadow-gray-500 w-62.5 items-center rounded-2xl">
            <h3 className="font-bold text-xl break-all">{data.name}</h3>
            <p className="text-slate-500 break-all">{data.description}</p>
            <div className="flex gap-2 ">
                <AppButton isPrimary={false} callback={callbacks} text="Hapus"/>
            </div>
        </div>
    )
}

export default ToDoCard;