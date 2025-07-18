import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import axios from 'axios'
import { API_BASE_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../store/userSlice'


const Main = () => {
  const dispatch=useDispatch();
  const userData=useSelector(store=>store.user);
  const navigate=useNavigate();
  const fetchUser=async()=>{
    try{
      const res=await axios.post(API_BASE_URL+"/profile/view",{},{ withCredentials: true });
      dispatch(addUser(res.data.data));
      return res?.data?.data;
    }
    catch(err){
      console.log(err);
      navigate("/login");
    }
  }
  
useEffect(() => {
  const checkUser = async () => {
    if (!userData) {
      const data = await fetchUser();
      if (data) {
        navigate('/feed');
      }
    }
  };

  checkUser();
}, []);



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