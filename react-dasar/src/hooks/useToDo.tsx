import { useState } from "react"


const useToDo = <T extends {id: number},>() => {
    const [data, setData] = useState<T[]>([]);
    const insertData = (data: T)=> {
        setData(prev => [...prev, data]);
    }
    const deleteData = (id: number) => {
        setData(prev => 
            prev.filter(item => item.id !== id )
        )
    }

    return {data, insertData, deleteData};
}

export default useToDo;