import { useState } from "react";

const useVisualMode = (currentMode) => {
  const [mode, setMode] = useState(currentMode);
  const [history, setHistory] = useState([mode]);

  const transition = (newMode, replace = false) => {
    setMode(newMode);
    if (replace === true) {
      setHistory((prev) => [...prev.slice(0, -1), newMode])
    } else {
      setHistory((prev) => [...prev, newMode]);
    }
  };

  const back = () => {
    if (history.length > 1) {
      const slicedHistory = [...history.slice(0,-1)];
      setHistory(slicedHistory);
      setMode(slicedHistory[slicedHistory.length -1]);
    }
  };

  const modeObject = { mode, transition, back };
  return modeObject;
};

export default useVisualMode;
