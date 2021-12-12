import { useState } from "react";

const useVisualMode = (currentMode) => {
  const [mode, setMode] = useState(currentMode)
  const [history, setHistory] = useState([mode]);
  
  const transition = (newMode, replace = false) => {
    setMode(newMode)
    
    if (replace === true) {
      const newHistory = [...history]
      newHistory.pop()
      newHistory.push(newMode)
      setHistory(newHistory);
    } else {
      const newHistory = [...history]
      newHistory.push(newMode)
      setHistory(newHistory);
      // ALTERNATE METHOD
      // setHistory((prev) => [...prev, newMode]);
    }
  };

  const back = () => {
    if (history.length > 1) {
      const newHistory = [...history]
      newHistory.pop()
      setHistory(newHistory)
      setMode(newHistory[newHistory.length-1])
    }
  }

  const modeObject = {mode, transition, back}
  return (
    modeObject
  );
};

export default useVisualMode;