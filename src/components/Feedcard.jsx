import axios from 'axios';
// import React, {  } from 'react'
import { API_BASE_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/FeedSlice';

export const Feedcard = (props) => {
      const dispatch = useDispatch ();
      const userData=props.user;
  
  const handleClick=async(status,toUserId)=>{
    try{
      const res=await axios.post(API_BASE_URL+"/request/send/"+status+"/"+toUserId,{},{withCredentials:true});
      console.log(res?.data);
      dispatch(removeUser(toUserId));
    }
    catch(err)
    {
        console.log("Error",err.response);
    }
  }

//   useEffect(() => {
//     if (props.user) {
//       userData=props.user
//     }
//   }, [props.user]);
  return (
    <div className=''>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={userData?.photoUrl? userData.photoUrl : "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2>{userData.name}</h2>
    { userData.age && userData.gender && <h3>{userData.age+" "+userData. gender}</h3>}
    <div className="card-actions justify-center my-5 flex items-center">
      <button className="btn btn-primary" onClick={()=>handleClick("interested",userData._id)}>Intrested</button>
      <button className="btn btn-secondary" onClick={()=>handleClick("ignored",userData._id)}>Ignore</button>
    </div>
  </div>
</div>
    </div>
  )
}
