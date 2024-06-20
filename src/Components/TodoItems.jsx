import React from "react";
import { FaCircleCheck, FaTrashCan, FaRegCircle } from "react-icons/fa6";
const TodoItems = ({ text, id, isComplete, deleteData, toggle }) => {
  const ans = isComplete ? (
    <FaCircleCheck className="text-orange-600 text-2xl w-7 cursor-pointer" />
  ) : (
    <FaRegCircle className="text-slate-600 text-2xl w-7 cursor-pointer" />
  );
  return (
    <div
      onClick={() => {
        toggle(id);
      }}
      className="flex items-center h-12 gap-2 px-4 hover:bg-zinc-300 rounded-2xl ease-in-out duration-300"
    >
      <div className="flex flex-1">
        {ans}
        <p
          className={`text-slate-800 ml-4 text-[17px] decoration-slate-500 ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <FaTrashCan
        className="w-3.5 cursor-pointer text-slate-600 hover:text-rose-400"
        onClick={() => {
          deleteData(id);
        }}
      />
    </div>
  );
};

export default TodoItems;
