import React, { useEffect, useRef, useState } from "react";
import { FaRegCalendarPlus } from "react-icons/fa6";
import TodoItems from "./TodoItems";
const Todo = () => {
  const [todoList, setTodoList] = useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]);
  const inputRef = useRef();
  const getCurrentDate = () => {
    const date = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };
  const addData = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };
  const deleteData = (id) => {
    setTodoList((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
  };
  const toggle = (id) => {
    setTodoList((prevToDo) => {
      return prevToDo.map((todo) => {
        if (todo.id === id) return { ...todo, isComplete: !todo.isComplete };
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-zinc-100 place-self-center w-11/12 max-w-lg flex flex-col p-7 min-h-[300px] rounded-xl shadow-xl">
      {/* -------title------- */}

      <div className="flex items-center  gap-1.5">
        <FaRegCalendarPlus className="size-8 pb-0.5" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
        <span className="ml-[110px] text-lg text-gray-600">
          Date: {getCurrentDate()}
        </span>
      </div>
      {/* -------input box------- */}
      <div className="flex item-center my-7 bg-gray-200 rounded-full hover:shadow-xl ease-in-out duration-300">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task"
        />
        <button
          className="border-none rounded-full bg-orange-600 w-[90px] h-14 text-white text-lg font-medium cursor-pointer"
          onClick={addData}
        >
          Add +
        </button>
      </div>
      {/* -------todo list------- */}
      <div>
        {todoList.map((item, index) => {
          return (
            <TodoItems
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteData={deleteData}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
