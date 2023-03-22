import React, { useState, useCallback } from "react";
import {Counter as CounterComponent} from "../components/Counter"

function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementCount = useCallback(() => {
    setCounter(counter + 1);
  },[counter]);

  const decrementCount = useCallback(() => {
    setCounter(counter - 1);
  },[counter])

  const resetCount = useCallback(() => {
    setCounter(0);
  },[])


  return (
    <CounterComponent counter={counter} incrementCount={incrementCount} decrementCount={decrementCount}></CounterComponent>
  );
}

export default Counter;
