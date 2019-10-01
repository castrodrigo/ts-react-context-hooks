import React from "react";
import { useCounterContext } from "../../context/CounterContext";

export default function CounterButtons() {
  const { increment, decrement } = useCounterContext();
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
