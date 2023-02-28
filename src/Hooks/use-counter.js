import { useState, useEffect } from "react";

function useCounter(initialCount) {
  //Block1: count Piece of State
  const [count, setCount] = useState(initialCount);

  // Block2: Use Effect
  useEffect(() => {
    console.log(count);
  }, [count]);

  //Block3 : HandleClick
  const increment = () => {
    setCount(count + 1);
  };
  return { count, increment };
}
export default useCounter;
