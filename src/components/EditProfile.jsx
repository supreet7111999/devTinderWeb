import React, { useState , useEffect } from 'react'
import {Usercard} from './Usercard'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { API_BASE_URL } from '../utils/constant';
import { addUser } from '../store/userSlice';

const EditProfile = () => {
const user = useSelector(store => store.user);
const [toaster,setToaster]=useState(false);
const dispatch=useDispatch();
const [userData, setUserData] = useState({
  name: '',
  photoUrl: '',
  age: '',
  gender: ''
});
const handleChange=(e)=>{
  const {name,value}=e.target;
  setUserData({...userData,[name]:value});
}

const handleClick=async (e)=>{
  try{
  e.preventDefault();
  const res=await axios.patch(API_BASE_URL+"/profile/edit",
    {
      name:userData.name,
      photoUrl:userData.photoUrl,
      gender:userData.gender,
      age:userData.age
    },
    {withCredentials:true});
  // console.log(res);
    dispatch(addUser(res?.data?.data));
    const user=res?.data?.data;
    setUserData({
      name: user.name,
      photoUrl: user.photoUrl,
      age: user.age,
      gender: user.gender
    });
    setToaster(true);
    setTimeout(()=>{
      setToaster(false)
    },4000);
   }
   catch(err){
    console.log(err);
   }
}  

useEffect(() => {
  if (user) {
    setUserData({
      name: user.name,
      photoUrl: user.photoUrl,
      age: user.age,
      gender: user.gender
    });
  }
}, [user]);
  console.log(user);
  return <>
      <div className="flex justify-center my-10">
        <div className="flex justify-center mx-10">
          <div className="card bg-base-300 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title justify-center">Edit Profile</h2>
              <div>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">Name:</span>
                  </div>
                  <input
                    type="text"
                    value={userData.name}
                    name="name"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => handleChange(e)}
                  />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">Photo URL :</span>
                  </div>
                  <input
                    type="text"
                    value={userData.photoUrl}
                    name="photoUrl"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => handleChange(e)}
                  />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">Age:</span>
                  </div>
                  <input
                    type="text"
                    name="age"
                    value={userData.age}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => handleChange(e)}
                  />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">Gender:</span>
                  </div>
                  <input
                    type="text"
                    name="gender"
                    value={userData.gender}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => handleChange(e)}
                  />
                </label>
              </div>
              {/* <p className="text-red-500">{error}</p> */}
              <div className="card-actions justify-center m-2">
                <button className="btn btn-primary" 
                onClick={(e)=>handleClick(e)}
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <Usercard
          user={userData}
        />
      </div>
      {toaster && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
       )}
    </>
  };

export default EditProfile