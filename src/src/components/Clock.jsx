import React, { useState, useEffect } from "react";

const Clock = () => {
  const [timer, setTimer] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTimer(new Date()), 1000);
  }, []);

  return (
    <div className="container " >
      <div className="alert alert-dark special" role="alert">
        <p>{timer.toLocaleTimeString()}</p>
      </div>
    </div >
  );
};

export default Clock;
