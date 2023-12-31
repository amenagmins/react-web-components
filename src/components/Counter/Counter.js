import React, { useState } from "react";
import "./counter.css";

export const Counter = ({ description }) => {
  const [cont, setCont] = useState(0);
  return (
    <div className="counter" onClick={() => setCont(cont + 1)}>
      <slot name="description">{description}</slot> {cont}
    </div>
  );
};
