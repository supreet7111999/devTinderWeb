import React, { useEffect, useState } from 'react'
import { Usercard } from '../components/Usercard';
import {API_BASE_URL} from '../utils/constant'
import axios from 'axios';

const Feed = () => {
  
  const [users,setUsers]=useState([]);

  const fetchUsers=async()=>{
    const res=await axios.get(API_BASE_URL+"/feed",{withCredentials:true});
    console.log(res?.data?.data);
    const usess=res?.data?.data;
    setUsers(usess);
  }

  useEffect(()=>{
    fetchUsers();
  },[]);



  return (
    <div className='mx-auto w-1/2 my-10'>
      <Usercard user={users[0]}/>
    </div>
  )
}

export default Feed;