import React, { useState } from 'react'
import A from './A'

function App1() {
    const [name, setName] = useState("");

  return (
    <div className="p-3 border border-primary">
      <h3>App Component</h3>
      <A name={name} setName={setName} />
    </div>
  );
}

export default App1