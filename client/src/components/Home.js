import React from 'react'
import Menu from './Menu'
import Main_Container from './Main_Container'

const Home = () => {
  return (
    <>
    <Menu/>
    <div className="mx-0 relative  my-[60px]" >
    <div className="absolute mt-[10px] mx-[160px]  border-2 border-red-600 h-[950px] w-[1040px]" >
    <Main_Container/>
    
    </div>
    </div>
    
    
    </>
  )
}

export default Home