import { useReducer, useState } from "react"
import { todoReducer } from "../reducers/todoReducer"
import ToDoCard from "../components/ToDoCard";


const ToDoForm = () => {
    const [state, dispatch] = useReducer(todoReducer, []);
    const [name, setName] = useState<string>("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(name == ""){
            return
        }
        dispatch({type: "add", payload: {name}});
        setName("");
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="ToDo Name" />
            </form>
            {state && state.map((data) => 
                <ToDoCard key={data.id} toDo={data} callbacks={{delete: () => dispatch({type:"delete", payload: {id:data.id}}), isCompleted:()=>dispatch({type:"setComplete", payload:{id: data.id}})}}/>
            )}
        </div>
    )


}

export default ToDoForm;