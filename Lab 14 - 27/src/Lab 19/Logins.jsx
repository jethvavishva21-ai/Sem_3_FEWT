import React, { useState } from 'react'

function Logins(props) {

    const [username, setName] = useState("");
    const [userPassword, setPassword] = useState("");

    function Check()
    {
        if(username === "admin" && userPassword === "12345")
        {
            props.setCurrentUser(username);
        }

        else
        {
            alert("Invalid Login !");
        }
    }

    return (
    <div className="card p-4 mx-auto w-50 shadow-sm mt-3">
      <h4 className="text-center mb-3">Login</h4>
      
      <input
        type="text"
        placeholder="Username (admin)"
        onChange={(e) => setName(e.target.value)}
        className="form-control mb-2"
      />
      
      <input
        type="password"
        placeholder="Password (12345)"
        onChange={(e) => setPassword(e.target.value)}
        className="form-control mb-3"
      />

      <button onClick={Check} className="btn btn-primary w-100">
        Login
      </button>
      
    </div>
  );
}

export default Logins
