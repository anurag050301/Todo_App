import React from "react";
import { FaRegCalendarPlus } from "react-icons/fa6";
import TodoItems from "./TodoItems";
const Todo = () => {
  return (
    <div className="bg-zinc-100 place-self-center w-11/12 max-w-lg flex flex-col p-7 min-h-[550px] rounded-xl shadow-xl">

    {/* -------title------- */}

    <div className="flex items-center mt-7 gap-1.5">
        <FaRegCalendarPlus className="size-8 pb-0.5"/>
        <h1 className="text-3xl font-semibold">To-Do List</h1>
    </div>
    {/* -------input box------- */}
    <div className="flex item-center my-7 bg-gray-200 rounded-full hover:shadow-xl">
        <input className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600" type = "text" placeholder="Add your task"/>
        <button className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer">Add +</button>
    </div>
    {/* -------todo list------- */}
    <div>
        <TodoItems text = "Learn Coding"/>
        <TodoItems text = "Learn DSA"/>
        <TodoItems text = "Learn C++"/>
    </div>
    </div>
  );
};

export default Todo;
