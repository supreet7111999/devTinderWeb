import React, { useState } from 'react'
import {Usercard} from './Usercard'

const EditProfile = () => {
  const [user,setUser]=useState({

  })
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
                    // value={firstName}
                    className="input input-bordered w-full max-w-xs"
                    // onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">Age:</span>
                  </div>
                  <input
                    type="text"
                    // value={age}
                    className="input input-bordered w-full max-w-xs"
                    // onChange={(e) => setAge(e.target.value)}
                  />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">Gender:</span>
                  </div>
                  <input
                    type="text"
                    // value={gender}
                    className="input input-bordered w-full max-w-xs"
                    // onChange={(e) => setGender(e.target.value)}
                  />
                </label>

              </div>
              {/* <p className="text-red-500">{error}</p> */}
              <div className="card-actions justify-center m-2">
                {/* <button className="btn btn-primary" onClick={saveProfile}>
                  Save Profile
                </button> */}
              </div>
            </div>
          </div>
        </div>
        <Usercard
        //   user={{ firstName, lastName, photoUrl, age, gender, about }}
        />
      </div>
      {/* {showToast && ( */}
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      {/* )} */}
    </>
  };

export default EditProfile