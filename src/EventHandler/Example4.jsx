import React, { useState } from 'react'

const Example4 = () => {
    const [isPassword,setisPassword]=useState(false)
  return (
    <div>
        <h2> Hide or Show Password</h2>
        <input className="border" type={isPassword ? "text":"password"} />
        <button onClick={()=>setisPassword(!isPassword)}>
            {isPassword ? "Hide":"Show"}
        </button>
    </div>
  )
}

export default Example4