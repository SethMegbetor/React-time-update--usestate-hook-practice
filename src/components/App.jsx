import React, { useState } from "react";

function App() {

  setInterval(getTime, 1000);

  let cTime = new Date().toLocaleTimeString();

  const [time, setCount] = useState(cTime);

  function getTime() {
    let nTime = new Date().toLocaleTimeString();
    setCount(nTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
