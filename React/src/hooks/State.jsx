// import React from 'react'
// import { useState,useEffect } from 'react'

// const State = () => {
//     const[count,setCount]=useState(0);
//     const[like,setLike]=useState(0);
//     useEffect(() => {
//       console.log("From useEffect");
//     },[like])
//   return (
//     <div>
//     <h2>useState Example</h2>
//     <h3>Likes: {like}</h3>
//     <button onClick={()=>setLike(like+1)}>Like 👍</button> &nbsp;
//     <button onClick={()=>setLike(like-1)}>Dislike 👎</button>
//     <h3>Count: {count}</h3>
//     <button onClick={()=>setCount(count+1)}>Increment 📈 </button>&nbsp;
//     <button onClick={()=>setCount(count-1)}>Decrement 📉
// </button>
//     </div>
//   )
// }

// export default State

import React, { useState, useEffect } from 'react'

const State = () => {
  const [count, setCount] = useState(0)
  const [like, setLike] = useState(0)

  useEffect(() => {
    console.log("From useEffect")
  }, [like])

  return (
    <>
      <style>{`
        .state-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #eaf3ff, #f6fbff);
          font-family: "Segoe UI", sans-serif;
        }

        .state-card {
          background: #ffffff;
          padding: 2rem 2.5rem;
          border-radius: 16px;
          width: 100%;
          max-width: 420px;
          text-align: center;
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.18);
        }

        .state-card h2 {
          color: #2b5dab;
          margin-bottom: 1.5rem;
        }

        .state-card h3 {
          color: #1e3a8a;
          margin: 1rem 0 0.5rem;
        }

        .btn-group {
          margin-bottom: 1rem;
        }

        .btn {
          padding: 0.5rem 1.2rem;
          margin: 0.3rem;
          border: none;
          border-radius: 10px;
          font-size: 0.95rem;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .btn-like {
          background: #bfdbfe;
          color: #1e40af;
        }

        .btn-dislike {
          background: #dbeafe;
          color: #1e3a8a;
        }

        .btn-inc {
          background: #3b82f6;
          color: #ffffff;
        }

        .btn-dec {
          background: #2563eb;
          color: #ffffff;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 14px rgba(37, 99, 235, 0.35);
        }
      `}</style>

      <div className="state-container">
        <div className="state-card">
          <h2>useState Example</h2>

          <h3>Likes: {like}</h3>
          <div className="btn-group">
            <button className="btn btn-like" onClick={() => setLike(like + 1)}>
              Like 👍
            </button>
            <button className="btn btn-dislike" onClick={() => setLike(like - 1)}>
              Dislike 👎
            </button>
          </div>

          <h3>Count: {count}</h3>
          <div className="btn-group">
            <button className="btn btn-inc" onClick={() => setCount(count + 1)}>
              Increment 📈
            </button>
            <button className="btn btn-dec" onClick={() => setCount(count - 1)}>
              Decrement 📉
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default State
