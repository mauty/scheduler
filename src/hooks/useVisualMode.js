import { useState } from "react";

const useVisualMode = (currentMode) => {
  const [mode, setMode] = useState(currentMode)
  
  const transition = (newMode) => {
    setMode(newMode)
  } 

  const modeObject = {mode,transition}
  return (
    modeObject
  );
};

export default useVisualMode;