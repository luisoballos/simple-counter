import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SecondsCounter = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [inputValue, setInputValue] = useState(0);
  const [alertTime, setAlertTime] = useState(null);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    if (alertTime !== null && count === alertTime) {
      alert(`Time reached: ${alertTime} seconds`);
    }

    return () => clearInterval(interval);
  }, [isRunning, count, alertTime]);

  const startCountdown = () => {
    setCount(inputValue);
    setIsRunning(true);
  };

  const stopCounter = () => setIsRunning(false);
  const resetCounter = () => {
    setCount(0);
    setIsRunning(false);
  };
  const resumeCounter = () => setIsRunning(true);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <span className="display-1">
        <FontAwesomeIcon icon="fa-regular fa-clock-three me-2" />{count}
      </span>
      <div className="mt-3">
        <input
          type="number"
          className="form-control mb-2"
          placeholder="Enter start time"
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
        <input
          type="number"
          className="form-control mb-2"
          placeholder="Enter alert time"
          onChange={(e) => setAlertTime(Number(e.target.value))}
        />
        <button className="btn btn-primary m-1" onClick={startCountdown}>Start Countdown</button>
        <button className="btn btn-danger m-1" onClick={stopCounter}>Stop</button>
        <button className="btn btn-warning m-1" onClick={resetCounter}>Reset</button>
        <button className="btn btn-success m-1" onClick={resumeCounter}>Resume</button>
      </div>
    </div>
  );
};

export default SecondsCounter;