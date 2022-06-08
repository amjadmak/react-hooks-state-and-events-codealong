import React from "react";
import Toggle from "./Toggle";
import { useState } from "react";

function App() {
  const [isOn, setIsOn] = useState(false);
  const color = isOn ? "red" : "white";
  return (
    <div>
      <h3>Toggle</h3>
      <Toggle isOn={isOn} setIsOn= {setIsOn} color={color} />
    </div>
  );
}

export default App;
