import { useState } from "react";
import Button from "@mui/material/Button";
export default function ParentCounter() {
  const [count, setCount] = useState(0);
  const upCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>Родитель</h2>
      <Button variant="contained" onClick={upCount}>
        +1
      </Button>
      <ChildCount count={count} />
    </div>
  );
}

function ChildCount({ count }) {
  return (
    <div>
      <h2>Дочерний компонент</h2>
      <p>Количество кликов: {count}</p>
    </div>
  );
}

// export default ChildCount;
