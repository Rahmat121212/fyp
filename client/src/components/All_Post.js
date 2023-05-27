import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md';
const All_Post = () => {
  return (
    <div className="flex  justify-between border-2 h-auto border-red-500 w-[730px]" >
      
        <h2 className=" text-red-600 font-serif font-bold text-lg flex  " >
            Latest News <MdArrowForwardIos className='m-1.5' /> 
        </h2>
        <span className="font-mono text-sm mt-1 text-gray-400 cursor-pointer hover:text-red-600  " >View All</span>
    
    </div>
  )
}

export default All_Post
