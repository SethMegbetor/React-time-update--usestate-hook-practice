import React, { useState } from "react";

function App() {
  setInterval(getTime, 1000);

  let cTime = new Date().toLocaleTimeString();

  const [time, setCount] = useState(cTime);

  // for hours
  let getHours = new Date().getHours();
  console.log(getHours);
  const [gtHours, setHours] = useState(getHours);

  // for munites
  let getMin = new Date().getMinutes();
  console.log(getHours);
  const [gtMin, setMin] = useState(getMin);

  // for seconds
  let getSec = new Date().getSeconds();
  console.log(getHours);
  const [gtSec, setSec] = useState(getSec);

  function getTime() {
    let nTime = new Date().toLocaleTimeString();
    setCount(nTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
      <p>Breaking it down</p>
      <h2>
        {getHours}hrs : {getMin}min : {getSec}secs
      </h2>
    </div>
  );
}

export default App;
