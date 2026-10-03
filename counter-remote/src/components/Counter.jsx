import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid blue",
        borderRadius: "10px",
      }}
    >
      <h2>Counter Remote App</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>
    </div>
  );
}
