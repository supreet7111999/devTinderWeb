import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
  
  const [userData,setUserData]=useState({
    "email":'',
    "password":'',
  });

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setUserData({...userData,[name]:value});
  };
  
  const handleSubmit=async (e)=>{
    e.preventDefault();
    //logic
    const res=await axios.post(
      "http://localhost:7000/login",
      userData,
      {withCredentials:true}
    );
    console.log(res);
    console.log(userData);
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