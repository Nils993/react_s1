import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const updateCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={updateCount}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}

export default Counter;
