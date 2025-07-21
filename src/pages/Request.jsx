import React, { useEffect, useState } from 'react';
import Connectioncard from '../components/Connectioncard';
import { API_BASE_URL } from '../utils/constant';
import axios from 'axios';
import NoConnection from '../components/NoConnection';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addRequests } from '../store/requestSlice';

const Request = () => {
  const dispatch=useDispatch();
  const request=useSelector(store=>store.request);
  // const [request, setRequest] = useState([]);
  const [error, setError] = useState(false);

  const fetchRequests = async () => {
    try {
      const res = await axios.get(
        API_BASE_URL + "/user/requests/received",
        { withCredentials: true }
      );
      const data = res?.data?.data || [];
      // setRequest(data);
      dispatch(addRequests(data));
    } catch (err) {
      setError(true);
      console.log(err?.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (error || request.length === 0) {
    return (
      <div className='flex flex-col justify-center items-center mt-10'>
        <h1 className='mb-4'>No Pending Requests</h1>
        <NoConnection />
        <Link className='mt-4 text-blue-500 underline' to='/feed'>
          Add Connections
        </Link>
      </div>
    );
  }

  return (
    <div className='flex flex-wrap justify-center'>
      {request.map((user) => (
        user?._id && (
          <Connectioncard user={user} key={user._id} />
        )
      ))}
    </div>
  );
};

export default Request;
