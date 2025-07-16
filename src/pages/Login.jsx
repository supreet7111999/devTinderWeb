import React, { useState } from 'react'
import axios from 'axios'
import {API_BASE_URL} from '../utils/constant'
import { useDispatch } from 'react-redux'
import {addUser} from '../store/userSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  // const user=useSelector(store=store.user);
  const dispatch=useDispatch();
  const [userData,setUserData]=useState({
    "email":'',
    "password":'',
  });
  const [error,setError]=useState("");
  const navigate=useNavigate();
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setUserData({...userData,[name]:value});
  };
  
  const handleSubmit=async (e)=>{
    try{
     e.preventDefault();
    //logic
    const res=await axios.post(
      API_BASE_URL+`/login`,
      userData,
      {withCredentials:true}
    );
    // console.log(res.data.data);
    // console.log(res?.data.status);
    if(res.data.status==400)
      console.log("kjnkj");
    dispatch(addUser(res.data.data.user));
    // console.log(userData);
    navigate("/feed")
    }
   catch(error)
   {
    // console.log(error);
    if (error.response && error.response.status === 400) {
    console.log("Invalid credentials");
    setError("Invalid Credentials");
  } else {
    setError("Something went wrong")
    console.error("Something went wrong:", error.message);
  }
   }
  }
  return (
    <div className='flex justify-center my-10'>
      <div className="card bg-base-100 w-96 shadow-sm ">
  <figure>
    <img
      src="https://plus.unsplash.com/premium_photo-1720192861639-1524439fc166?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9naW58ZW58MHx8MHx8fDA%3D"
      alt="Login" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Login Please
    </h2>
    {error&&<div role="alert" className="alert alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>{error}</span>
</div>}
    <div>
       <fieldset className="fieldset">
       <legend className="fieldset-legend">Email</legend>
       <input 
         type="text" 
         className="input" 
         placeholder="Type here" 
         name='email'
         onChange={handleChange}
       />
        
       </fieldset>
    </div>
    <div>
      <fieldset className="fieldset">
       <legend className="fieldset-legend">Password</legend>
       <input 
         type="password" 
         className="input" 
         placeholder="Type here" 
         name='password'
         onChange={handleChange}
       />
       </fieldset>
    </div>
    <button 
      className="btn btn-wide mx-8"
      onClick={handleSubmit}
      >Login</button>
  </div>
</div>
    </div>
  )
}

export default Login