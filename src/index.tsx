import React, { useState } from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter/Counter";

interface AppType {
  color?: string;
}

const App = ({ color }: AppType) => {
  return <Counter />;
};

ReactDOM.render(<App />, document.getElementById("root"));
