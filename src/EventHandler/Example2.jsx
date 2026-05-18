import React, { useState } from 'react'

const Example2 = () => {
    const [count,setCount]=useState(0);

   const handleIncrement=()=>
   {
      setCount(count+1);
   }

    const handleDecrement=()=>
   {
    if(count<=0) return setCount(0)
      setCount(count-1);
   }

   const handleIncrement5=()=>
   {
        setCount(count+5);
   }
   const handleReset=()=>
   {
        setCount(0)
   }
  return (
    <div>
       <h2> Count={count}</h2> 
       <button onClick={handleIncrement}>Increment </button>
       <button onClick={handleDecrement}>Decrement </button>
       <button onClick={handleIncrement5}>Incrementby5 </button>
       <button onClick={handleReset}>Reset</button>

    </div>
  )
}

export default Example2