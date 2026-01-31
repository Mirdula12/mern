// import React from 'react'
// import { useReducer } from 'react'
// const reducer=(state,action)=>{
//     switch(action.type){
//         case 'INCREMENT':
//             return {count:state.count+1}
//         case 'DECREMENT':
//             return {count:state.count-1}
//         case 'RESET':
//             return {count:0}    
//         default:
//             break;
//     }
// }
// const initialState={count:0}
// const Reducer = () => {
//     const [state,dispatch]=useReducer(reducer,initialState)
//   return (
//     <div>
//       <h1>useReducer Example
//         <h3>Count: {state.count}</h3>
//         <button onClick={()=>dispatch({type:'INCREMENT'})}>+</button>&nbsp;
//         <button onClick={()=>dispatch({type:'DECREMENT'})}>-</button>&nbsp;
//         <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>
//       </h1>
//     </div>
//   )
// }

// export default Reducer


import React, { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    case 'RESET':
      return { count: 0 }
    default:
      return state
  }
}

const initialState = { count: 0 }

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <style>{`
        .reducer-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #eaf3ff, #f6fbff);
          font-family: "Segoe UI", sans-serif;
        }

        .reducer-card {
          background: #ffffff;
          padding: 2rem 2.5rem;
          border-radius: 16px;
          width: 100%;
          max-width: 420px;
          text-align: center;
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.18);
        }

        .reducer-card h1 {
          color: #2b5dab;
          margin-bottom: 0.5rem;
        }

        .reducer-card h3 {
          color: #1e3a8a;
          margin-bottom: 1.5rem;
        }

        .btn {
          padding: 0.5rem 1.2rem;
          margin: 0.3rem;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .btn-inc {
          background: #3b82f6;
          color: #ffffff;
        }

        .btn-dec {
          background: #2563eb;
          color: #ffffff;
        }

        .btn-reset {
          background: #bfdbfe;
          color: #1e3a8a;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 14px rgba(37, 99, 235, 0.35);
        }
      `}</style>

      <div className="reducer-container">
        <div className="reducer-card">
          <h1>useReducer Example</h1>
          <h3>Count: {state.count}</h3>

          <button
            className="btn btn-inc"
            onClick={() => dispatch({ type: 'INCREMENT' })}
          >
            +
          </button>

          <button
            className="btn btn-dec"
            onClick={() => dispatch({ type: 'DECREMENT' })}
          >
            -
          </button>

          <button
            className="btn btn-reset"
            onClick={() => dispatch({ type: 'RESET' })}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  )
}

export default Reducer
