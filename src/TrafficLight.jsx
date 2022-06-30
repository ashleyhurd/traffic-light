import React, { useState, useEffect } from "react";


const Light = ({ color, active }) => (
  <div className="light" style={{ backgroundColor: color, opacity: active ? 1 : 0.1 }} />
);

const lightDurations = [3000, 2000, 1000];

const TrafficLight = ({ initialValue }) => {
  const [colorIndex, setColorIndex] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setColorIndex((colorIndex + 1) % 3);
    }, lightDurations[colorIndex]);
    return () => {
      clearTimeout(timer);
    };
  });
  
  return (
    <div className="traffic-light">
      <Light color = "red" active={colorIndex === 0} />
      <Light color = "yellow" active={colorIndex === 2} />
      <Light color = "green" active={colorIndex === 1} />
    </div>
  );
};

export default TrafficLight;




