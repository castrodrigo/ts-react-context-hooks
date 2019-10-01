import React from "react";
import { useCounterContext } from "../../context/CounterContext";

const Display = () => {
  const { count } = useCounterContext();
  return (
    <div>
      <h3>Counter</h3>
      <p>{count}</p>
    </div>
  );
};

export default Display;
