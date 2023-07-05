import React, { useEffect, useState} from "react";
import "./Counter.scss";
import { MapComponent } from "./MapComponent";


export const Counter = ({ className }) => {
  const [count, setCount] = useState(4);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div className={`Counter ${className !== undefined ? className : ""}`}>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count * 2)}>Times</button>
      <button onClick={() => setCount(count / 2)}>Decrement -</button>
       <MapComponent/>;
      </div>

  );
};
