import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Main = () => {
  return (
    <div className='flex flex-col h-screen'>
       <Navbar/>
        <div className='flex-1 overflow-y-auto pb-16'>
          <Outlet/>
        </div>
        <Footer className='fixed bottom-0 left-0 w-full h-[10px] bg-gray-800 text-white'/>
    </div>
  )
}

export default Main;