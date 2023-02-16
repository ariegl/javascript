import { useState, useEffect } from "react";
import Todo from "./todo";

export default function TodoApp() {
  const [title, setTitle] = useState("Juanga");
  const [todos, setTodos] = useState([]);

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
    };

    //HACEMOS UNAS COPIA TEMPORAL DEL ARREGLO
    const temp = [...todos];

    //UNSHIFT AGREGA UN ELEMENTO AL INICIO DEL ARREGLO Y DESPLAZA A LOS DEMAS 1 POSICION
    temp.unshift(newTodo);

    setTodos(temp);

    setTitle("");
  }

  function handleUpdate(id, value) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos(temp);
  }

  function handleDelete(id) {
    const temp = todos.filter((item) => item.id != id);

    setTodos(temp);
  }

  return (
    <div className="todoContainer w-2/5  flex justify-center flex-wrap">
      <div className="pb-5 w-full flex justify-center">
        <span className="font-bold text-5xl">
          Todo <span className="text-green-700 text-4xl">List</span>
        </span>
      </div>
      <form action="" className="todoCreateForm w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          className="todoInput m-0 w-3/5 outline-none bg-yellow-100 text-yellow-800 rounded-l-3xl font-bold p-2 pl-4"
          value={title}
        />
        <input
          onClick={handleSubmit}
          type="submit"
          value="Create to do"
          className="buttonCreate bg-gray-400 p-1.5 m-0 text-white font-bold cursor-pointer"
        />
      </form>

      <div className="todosContainer w-full flex justify-center flex-wrap mt-4">
        <h1 className="w-full text-center font-bold text-2xl">tasks</h1>
        {todos.map((item) => (
          <Todo
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
