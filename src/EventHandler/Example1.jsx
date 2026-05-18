import React from 'react'

const Example1 = () => {
    const handleClick=()=>
    {
        alert ("Submitted Successfully!!!")
    }
  return (
    <div>

        <button className='border p-2 bg-amber-800 text-white hover:bg-amber-400 transition-colors' onClick={handleClick}>Click</button>
    </div>
  )
}

export default Example1