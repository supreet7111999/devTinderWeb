import React, { useEffect, useState } from 'react'
import Connectioncard from '../components/Connectioncard'
import { API_BASE_URL } from '../utils/constant'
import axios from 'axios'
import NoConnection from '../components/NoConnection';
import { Link } from 'react-router-dom';
const Request = () => {
  const [request,setRequest]=useState([]);
  const [error,setError]=useState(false);
  const fetchRequests=async()=>{
    try{
       const res=await axios.get(API_BASE_URL+"/user/requests/received",{withCredentials:true});
       console.log(res?.data?.data);
       setRequest(res?.data?.data);
    }
    catch(err)
    {
      setError(true);
      console.log(err.response.data);
    }
  }
  useEffect(()=>{
    fetchRequests();
  },[]);

  return error ? (
  <div className='flex flex-col justify-items-center content-center mt-50 ml-70'>
    <h1 className='mr-5'>No Pending Requets</h1>
    <NoConnection />
    <Link className='ml-5' to='/feed'>Add Connections</Link>
  </div>
) : (
  <div>
    {request.map((user) => (
      <Connectioncard user={user} key={user._id} />
    ))}
  </div>
);

}

export default Request