import React from 'react'
import { useReducer } from 'react'
const reducer=(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {count:state.count+1}
        case 'DECREMENT':
            return {count:state.count-1}
        case 'RESET':
            return {count:0}    
        default:
            break;
    }
}
const initialState={count:0}
const Reducer = () => {
    const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      <h1>useReducer Example
        <h3>Count: {state.count}</h3>
        <button onClick={()=>dispatch({type:'INCREMENT'})}>+</button>&nbsp;
        <button onClick={()=>dispatch({type:'DECREMENT'})}>-</button>&nbsp;
        <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>
      </h1>
    </div>
  )
}

export default Reducer
