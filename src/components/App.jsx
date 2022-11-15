import React from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  console.log(time);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button>Get Time</button>
    </div>
  );
}

export default App;
