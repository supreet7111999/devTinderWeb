import React, { useEffect, useState } from 'react';
import Connectioncard from '../components/Connectioncard';
import axios from 'axios';
import { API_BASE_URL } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addConnections } from '../store/connectionSlice';
import NoConnection from '../components/NoConnection';
import { Link, useNavigate } from 'react-router-dom';

const Connection = () => {
  const dispatch = useDispatch();
  const [error,setError]=useState(false);
  const [userData, setUserData] = useState([]);
  const connection = useSelector((store) => store.connection);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(API_BASE_URL + '/user/connections', { withCredentials: true });
      console.log(res?.data?.data);
      return res?.data?.data || [];
    } catch (err) {
      console.log(err.response.data);
      setError(true);
      return [];
    }
  };

  useEffect(() => {
    const checkConnections = async () => {
      const data = await fetchConnections();
      setUserData(data);
      dispatch(addConnections(data));  // Dispatch the data after fetching
    };
    checkConnections();
  }, []);  // Run once after component mount

  
  {
return error ? (
  <div className='flex justify-center mt-50'>
    <h1 className='mr-5'>No Connections</h1>
    <NoConnection/>
    <Link className='ml-5' to='/feed'>Add Connections</Link>
  </div>
) : (
  <div>
    {userData.map((user) => (
      <Connectioncard user={user} key={user._id} />
    ))}
  </div>
);
  }
};

export default Connection;
