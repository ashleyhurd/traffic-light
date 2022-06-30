import React from "react";
import ReactDOM from "react-dom/client";

import TrafficLight from "./TrafficLight";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <TrafficLight initialValue={0} />
      <TrafficLight initialValue={1} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
