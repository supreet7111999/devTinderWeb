import React, { useState ,useEffect } from 'react'

export const Usercard = (props) => {
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    email: "",
    gender: "",
    photoUrl: ""
  });

  useEffect(() => {
    if (props.user) {
      setUserData(props.user);
    }
  }, [props.user]);
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
      <button className="btn btn-primary">Intrested</button>
      <button className="btn btn-secondary">Ignore</button>
    </div>
  </div>
</div>
    </div>
  )
}
