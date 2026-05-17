import React,{useState} from "react";


const State = () => {
    const [show,setShow]=useState(true)
  return (
    // <div>
    //   <h1>{name}</h1>

    //   <button onClick={() => setName("tikki")}>
    //     Change Name
    //   </button>
    // </div>

     <div>
      {
        show ? <h1>Hello!</h1> : null
      }

      <button onClick={() => setShow(!show)}>
        Toggle
      </button>
    </div>
  )
}

export default State