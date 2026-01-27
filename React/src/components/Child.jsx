import React from 'react'

const Child = ({send}) => {
  return (
    <div>
        <h2>Parent to child check</h2>
       <button onClick={()=>send("Hello from Child")}>
            Send Data
        </button>
    </div>
  )
}

export default Child
