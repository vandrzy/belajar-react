import type { ToDo } from "../types/ToDo";




interface Props {
    toDo: ToDo
    callbacks: {
        delete: ()=> void,
        isCompleted: () => void
    }
}

const ToDoCard = ({toDo, callbacks}: Props) =>{
    return (
        <div>
            <h3 className={` text-2xl ${toDo.isComplete ? "text-blue-500": "text-slate-500"}`}>{toDo.name}</h3>
            <button onClick={callbacks.isCompleted} className="bg-blue-400">selesai</button>
            <button onClick={callbacks.delete} className="bg-red-500">hapus</button>
        </div>
    )
}

export default ToDoCard;