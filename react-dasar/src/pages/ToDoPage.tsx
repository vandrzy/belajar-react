import { useState } from "react";
import useToDo from "../hooks/useToDo"
import type { ToDo } from "../types/ToDo"
import AppButton from "../components/Button";
import ToDoCard from "../components/TodoCard";

const ToDoPage = () => {
    const {data, insertData, deleteData} = useToDo<ToDo>();
    const [id, setId] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    return (
        <div className="py-8 px-10">
            <div className="flex flex-col gap-2">
            <label htmlFor="" className="flex gap-2 text-xl"> <p>id</p>
                <input type="number" className="border-b-2" onChange={(e) => setId(parseInt(e.target.value))}/>
            </label>
            <label htmlFor="" className="flex gap-2 text-xl"> <p>name</p>
                <input type="text" className="border-b-2" onChange={(e) => setName(e.target.value)}/>
            </label>
            <label htmlFor="" className="flex gap-2 text-xl"> <p>description</p>
                <input type="text" className="border-b-2" onChange={(e) => setDescription(e.target.value)}/>
            </label>

            <AppButton isPrimary={true} text="Simpan" callback={()=>insertData({id, name, description})} />

            </div>
            <div className="flex flex-wrap">
                {data && data.map((item) => (
                    <div>
                        <ToDoCard key={item.id} data={item} callbacks={() => deleteData(item.id)} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ToDoPage;