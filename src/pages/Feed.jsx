import React, { useEffect } from 'react';
import { Feedcard } from '../components/Feedcard';
import { API_BASE_URL } from '../utils/constant';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../store/FeedSlice';

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const fetchUsers = async () => {
    const res = await axios.get(API_BASE_URL + "/feed", { withCredentials: true });
    console.log(res?.data?.data);
    dispatch(addUser(res?.data?.data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle loading or no users state
  if (!feed || feed.length === 0) {
    return <h2 className="flex justify-center my-10">No new users found!</h2>;
  }

  // Render the first user in feed
  return (
    <div className='mx-auto w-1/2 my-10'>
      <Feedcard user={feed[0]} />
    </div>
  );
};

export default Feed;
