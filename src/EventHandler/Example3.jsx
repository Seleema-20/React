import React, { useState } from 'react'

const Example3 = () => {
    const [isLoggedIn,setisLoggedIn]=useState(false)
  return (
    <div>
        <h2> {isLoggedIn? " Welcome User":"Please login!!"}</h2>
        <button onClick={()=>setisLoggedIn(!isLoggedIn)}>{isLoggedIn ? "logout":"login"}</button>
    </div>
  )
}

export default Example3;