import { useState } from "react";

const useVisualMode = (currentMode) => {
  const [mode, setMode] = useState(currentMode)
  const [history, setHistory] = useState([mode]);
  
  const transition = (newMode, replace = false) => {
    // console.log('history before transition:', history)
    // console.log('incoming from transition:', newMode)
    setMode(newMode)
    
    if (replace === true) {
      // console.log('inside condition')
      const newHistory = [...history]
      newHistory.pop()
      // console.log('history after pop', history)
      newHistory.push(newMode)
      // console.log('history after push', history)
      setHistory(newHistory);
    } else {
      const newHistory = [...history]
      newHistory.push(newMode)
      setHistory(newHistory);
      // ALTERNATE METHOD
      // setHistory((prev) => [...prev, newMode]);
    }
    // console.log('history after transition:', history)
  
  };

  const back = () => {
    // console.log('history from back function:', history)
    // console.log('history legnth',history[history.length-1])
    if (history.length > 1) {
      const newHistory = [...history]
      newHistory.pop()
      setHistory(newHistory)
      setMode(newHistory[newHistory.length-1])
    }
    // console.log('history after pop', history)
  }

  const modeObject = {mode, transition, back}
  return (
    modeObject
  );
};

export default useVisualMode;