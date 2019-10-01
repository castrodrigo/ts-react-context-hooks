import React from "react";
import { useCounterContext } from "../../context/CounterContext";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";

const Counter = () => (
  <useCounterContext.Provider>
    <div style={{ textAlign: "center" }}>
      <Display />
      <ButtonPanel />
    </div>
  </useCounterContext.Provider>
);

export default Counter;
