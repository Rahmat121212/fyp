import React from 'react'
import All_Post from './All_Post'

const Main_Container = () => {
  return (
    <div className="h-[150px] w-[730px] " >
      <img src="/baby.jpg" alt="" />
      <div className=" flex justify-between pt-4 w-[730px] " >
        <div className="w-[350px] border-2 shadow-md pb-4 " >
            <img src="/baby.jpg" alt="" className="object-cover" />
            <h3 className="font-sans p-4 font-bold text-lg  " >
            You may combine any of the options above  the options above.
            </h3>
            <span className="font-sans text-black ml-4  text-xs" > by <span className="text-red-600" > John Doe. </span>August 02, 2021</span>
        </div>
        <div className="w-[350px] border-2 shadow-md pb-4  " >
            <img src="/baby.jpg" alt="" className="object-cover" />
            <h3 className="font-sans p-4 font-bold text-lg  " >
            You may combine any of the options above  the options above.
            </h3>
            <span className="font-sans text-black p-4 text-xs" > by <span className="text-red-600" > John Doe. </span>August 02, 2021</span>
        </div>
      </div>
      <div className=" flex justify-between pt-4 w-[730px]"  >
      <All_Post/>
      </div>
      
    </div>
  )
}

export default Main_Container
