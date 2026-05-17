import React from 'react'
import State from './State'

function App() {
 return (
   <div>
      <State/>
   </div>
  )
}


export default App


//  <BrowserRouter>
//       <div>
//         <nav>
//           <Link to="/">Home</Link> |{" "}
//           <Link to="/about">About</Link> |{" "}
//           <Link to="/contact">Contact</Link>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </BrowserRouter>