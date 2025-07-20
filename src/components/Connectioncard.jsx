import React from 'react'

const Connectioncard = (props) => {
  const user=props.user;
  return (
    <div>
        <div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src={user.photoUrl || "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{user.name}</h2>
    <p>{user.age + " " + user.gender}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Connectioncard