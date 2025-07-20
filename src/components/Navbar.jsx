import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {removeUser} from '../store/userSlice'
import { Link, useNavigate } from 'react-router-dom';
import {API_BASE_URL} from '../utils/constant'

import axios from 'axios';
const Navbar = () => {
  const user=useSelector(store=>store.user);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  console.log(user);
  const handleClick=async (e)=>{
     try{
      e.preventDefault();
    
    const res=await axios.post(API_BASE_URL+"/logout",{},{withCredentials:true});
    dispatch(removeUser());
    console.log(res);
    navigate("/login");
     }
     catch(err)
     {
      console.log(err);
     }
  }


  return (
          <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <Link to="/feed" className="btn btn-ghost text-xl">DevTinder</Link>
  </div>
  {user && <div className="flex gap-2">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mx-5">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user.photoUrl || "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">{user.name}</span>
          </Link>
        </li>
        <li><Link to="/connection">Connections</Link></li>
        <li><Link to="/requests">Requests</Link></li>
        <li><button onClick={handleClick}>Logout</button></li>
      </ul>
    </div>
  </div>}
</div>
  )
}

export default Navbar