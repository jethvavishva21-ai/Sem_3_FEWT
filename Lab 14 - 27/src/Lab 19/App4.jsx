import React, { useState } from 'react'
import Logins from './Logins';
import Home from './Home';

function App4() {

    const [currentuser, setCurrentUser] = useState("");

  return (
    <>
        {currentuser === "" ? (
              <Logins setCurrentUser={setCurrentUser} />
          ) : (<Home currentuser={currentuser} />)
        }
    </>
  )
}

export default App4
