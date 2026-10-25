import React, { useState } from 'react'
import C from './C'

function B({ name, setName }) {
   const [input, setInput] = useState("");

   return (
     <div className="p-2 m-2">
       <input
         type="text"
         placeholder="Enter name..."
         onChange={(e) => setInput(e.target.value)}
         className="form-control mb-2"
       />
       <button onClick={() => setName(input)} className="btn btn-primary mb-3">
         Set Name
       </button>
       <C name={name} />
     </div>
   );
}  

export default B
