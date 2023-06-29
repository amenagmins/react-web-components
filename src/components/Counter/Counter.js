import React, { useState } from "react";
import "./counter.css";

export const Counter = () => {
  const [cont, setCont] = useState(0);
  return (
    <div className="counter" onClick={() => setCont(cont + 1)}>
      Click me! <span>{cont}</span>
    </div>
  );
};
