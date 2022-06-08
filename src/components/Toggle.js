import React from "react";

function Toggle({isOn, setIsOn, color}) {

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  return <button style={{ background: color }} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
