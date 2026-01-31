import { useState, useEffect } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  // Effect runs whenever 'count' changes
  useEffect(() => {
    if (count === 0) {
      setMessage("Click the button to start counting!");
    } else {
      setMessage(`You clicked ${count} times`);
    }

    console.log("Count updated:", count);

    // Optional cleanup example (not necessary here)
    return () => {
      console.log("Cleanup before next effect or unmount");
    };
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>useEffect Example</h1>
      <p>{message}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button
        onClick={() => setCount(0)}
        style={{ marginLeft: "10px" }}
      >
        Reset
      </button>
    </div>
  );
};

export default Effect;
