import { useState, useEffect } from "react";
import Todo from "./todo";

export default function TodoApp() {
  const [title, setTitle] = useState("Juanga");
  const [todos,setTodos] = useState([]);

  function handleClick(e) {
    e.preventDefault();

    setTitle("ArIeL");
  }

  function handleChange(e) {
    const val = e.target.value;

    setTitle(val);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
        id: crypto.randomUUID(),
        title: title,
        completed: false,
    }

    //HACEMOS UNAS COPIA TEMPORAL DEL ARREGLO
    const temp = [... todos];

    //UNSHIFT AGREGA UN ELEMENTO AL INICIO DEL ARREGLO Y DESPLAZA A LOS DEMAS 1 POSICION
    temp.unshift(newTodo);

    setTodos(temp);
  }

  return (
    <div className="todoContainer">
      <form action="" className="todoCreateForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" className="todoInput" />
        <input
          onClick={handleSubmit}
          type="submit"
          value="Create to do"
          className="buttonCreate"
        />
        {title}
      </form>

      <div className="todosContainer">
        {
            todos.map(item => (
                <Todo key={item.id} item={item}/>
            ))
        }
      </div>
    </div>
  );
}
