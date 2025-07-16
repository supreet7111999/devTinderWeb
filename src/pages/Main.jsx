import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Main = () => {
  return (
    <>
     <Navbar/>
     <Outlet/>
     <Footer/>
    </>
    
  )
}

export default Main