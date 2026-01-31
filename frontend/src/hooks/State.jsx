import React, { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
   const [dislikeCount, setDislikeCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>useState Example</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
        <h2>Like Count: {likeCount}</h2>
      <button onClick={() => setLikeCount(likeCount + 1)}>👍 Like</button>
      <h2>Dislike Count: {dislikeCount}</h2>
      <button onClick={() => setDislikeCount(dislikeCount + 1)}>👎 Dislike</button>
    </div>
  );
};

export default State;