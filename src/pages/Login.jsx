import React, { useState } from 'react'
import axios from 'axios'
import {API_BASE_URL} from '../utils/constant'
import { useDispatch } from 'react-redux'
import {addUser} from '../store/userSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  // const user=useSelector(store=store.user);
  const dispatch=useDispatch();
  const [toaster,setToaster]=useState({
    value:'',
    flag:false
  });
  const [login,setLogin]=useState(false);
  const [userSignup,setUserSignup]=useState({
    "email":"",
    "password":'',
    "age":'',
    "name":'',
    "gender":''
  })
  const [userData,setUserData]=useState({
    "email":'',
    "password":'',
  });
  const [error,setError]=useState("");
  const navigate=useNavigate();
  const handleSignupChange=(e)=>{
    const {name,value}=e.target;
    setUserSignup({...userSignup,[name]:value});
  };
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setUserData({...userData,[name]:value});
  };
  
const handleSignUp = async (e) => {
  try {
    e.preventDefault();
    console.log("Signup Payload Before Sending:", userSignup);
    const res = await axios.post(
      API_BASE_URL + `/signup`,
      userSignup,
      { withCredentials: true }
    );
    console.log(res?.data?.data);
    setLogin(true); // Switch to login form
setUserSignup({email:"", password:"", age:"", name:"", gender:""}); // Reset form
alert("Signup successful! Please login.");
  } catch (err) {
    const errorMsg =
      err?.response?.data?.message?.message || "Something went wrong!";

    console.log(errorMsg);

    setToaster({
      value: errorMsg,
      flag: true,
    });

    setTimeout(() => {
      setToaster({ value: '', flag: false });  // fixed typo here
    }, 4000);
  }
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
  { login? (<div className="card-body">
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
      <div>
        No Accout ? <span
         className=""
         onClick={()=>setLogin(!login)} 
        >Sign Up</span>
      </div>
  </div>) : 
  (<div className="card-body">
    <h2 className="card-title">
      SignUp Please
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
         onChange={handleSignupChange}
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
         onChange={handleSignupChange}
       />
       </fieldset>
    </div>
    <div>
      <fieldset className="fieldset">
       <legend className="fieldset-legend">Name</legend>
       <input 
         type="text" 
         className="input" 
         placeholder="Type here" 
         name='name'
         onChange={handleSignupChange}
       />
       </fieldset>
    </div>
    <div>
      <fieldset className="fieldset">
       <legend className="fieldset-legend">Gender</legend>
       <input 
         type="text" 
         className="input" 
         placeholder="Type here" 
         name='gender'
         onChange={handleSignupChange}
       />
       </fieldset>
    </div>
    <div>
      <fieldset className="fieldset">
       <legend className="fieldset-legend">Age</legend>
       <input 
         type="text" 
         className="input" 
         placeholder="Type here" 
         name='age'
         onChange={handleSignupChange}
       />
       </fieldset>
    </div>
    <button 
      className="btn btn-wide mx-8"
      onClick={handleSignUp}
      >SignUp</button>
    <div>
        Have Accout ? <span
         className=""
         onClick={()=>setLogin(!login)} 
        >Log-IN</span>
    </div>  
  </div>)
  }
        {toaster.flag && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>{toaster.value}</span>
          </div>
        </div>
       )}
</div>

    </div>
  )
}

export default Login