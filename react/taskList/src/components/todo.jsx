import { useState } from "react"

export default function Todo({item, onUpdate, onDelete}) {

    const [isEdit,setIsEdit] = useState(false);

    const [newValue, setNewValue] = useState(item.title ?? "");

    function handleChange(e) {
        setNewValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleClickUpdateTodo() {
        onUpdate(item.id,newValue);
        setIsEdit(false);
    }

    function FormEdit() {
        return (
            <form action="" className="todoUpdateForm mt-2 flex justify-center" onSubmit={handleSubmit}>
                <input type="text" className="todoInput outline-none bg-yellow-100 text-yellow-800 font-bold p-1 pl-4" onChange={handleChange} value={newValue}/>
                <button className="button border-solid border-2 px-2 border-current " onClick={handleClickUpdateTodo}>Update</button>
            </form>
        )
    }

    function TodoElement() {
        return (
            <div className="todoInfo mt-2 flex justify-center">
                <span className="text-yellow-400 m-2">{item.title}</span>
                <button className="m-2 border-solid border-2 px-2 border-current " onClick={() => setIsEdit(true)}>Editar</button>
                <button className="m-2 border-solid border-2 px-2 border-current" onClick={(e) => onDelete(item.id)}>Eliminar</button>
            </div>
        )
    }

    return (
        <div className="todo min-w-full w-full">
            {
                isEdit ? <FormEdit/> : <TodoElement/>
            }
        </div>
    )
}