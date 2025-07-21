import React from 'react';
// import { API_BASE_URL } from '../utils/constant';
// import axios from 'axios';
// import { removeRequest } from '../store/requestSlice';
// import { useDispatch } from 'react-redux';

const ConnectionFriends = ({ user }) => {
//   const dispatch=useDispatch();
  console.log(user);
//   const handleClick=async(status,id,rId)=>{
//     try{
//        const res=await axios.post(API_BASE_URL+"/request/review/"+status+"/"+id,{},{withCredentials:true});
//        console.log(res?.data?.data);
//        dispatch(removeRequest(rId));
//     }
//     catch(err){
//       console.log(err);
//     }
//   }
  
  if (!user) {
    console.log("Connectioncard received undefined user");
    return null;  // or show a placeholder if you prefer
  }

  return (
    <div className="card card-side bg-base-100 shadow-sm my-4 w-1/2 mx-auto mt-10">
      <figure>
        <img
          src={user.photoUrl || "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"}
          alt={user.name || "User Image"}
        />
      </figure>
      <div className="card-body flex-col justify-between">
        <h2 className="card-title">{user.name || "Unknown User"}</h2>
        {user.age && user.gender && (
          <p>{user.age + " " + user.gender}</p>
        )}
        {/* <div className="card-actions justify-end mt-40">
          <button className="btn btn-primary" onClick={()=>handleClick("accepted",user.from._id,user._id)}>Accept</button>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={()=>handleClick("rejected",user.from._id,user._id)}>Reject</button>
        </div> */}
      </div>
    </div>
  );
};

export default ConnectionFriends;
