import type { ToDo } from "../types/ToDo";


export type ToDoActions = 
|{type: "add", payload: {name: string}}
|{type: "setComplete", payload: {id: number}}
|{type: "delete", payload: {id: number}}

export const todoReducer = (state: ToDo[], action: ToDoActions): ToDo[] => {
    switch (action.type){
        case("add"):
            return [...state, createToDo(action.payload.name)]
        case("setComplete"):
            return state.map(toDo => {
                if (toDo.id === action.payload.id){
                    return {...toDo, isComplete: !toDo.isComplete}
                }
                return toDo
            })
        case("delete"):
            return state.filter(toDo => toDo.id !== action.payload.id)
        default:
            return state
    }
}

const createToDo = (name: string):ToDo => {
    return {
        id: Date.now(),
        name,
        isComplete: false
    }
}