import React from 'react'
import { FaCircleCheck, FaTrashCan } from 'react-icons/fa6'
const TodoItems = ({text}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div className='flex flex-1'>
        <FaCircleCheck className='text-orange-600 text-2xl w-7'/>
        <p className='text-slate-800 ml-4 text-[17px]'>{text}</p>
        </div>
        <FaTrashCan className='w-3.5 cursor-pointer text-slate-600 hover:text-rose-400'/>
    </div>
  )
}

export default TodoItems