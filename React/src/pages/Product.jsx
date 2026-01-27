import React from 'react'
import { Link } from 'react-router-dom'
const Product = () => {
    const product =[
        {id:1, name:"Laptop", price:30000},
        {id:2, name:"Mouse", price:1000},
        {id:3, name:"Mobile", price:50000},
        {id:4, name:"Keyboard", price:3000},
    ]
  return (
    <div>
      <h1>Product Page</h1>
      {product.map((product)=>(
        <div key={product.id}>
        <h4>{product.name}</h4>
        <h5>{product.price}</h5>
        <Link to = {`/product/${product.id}`}>view details</Link>
        </div>
        ))}
    </div>
  )
}

export default Product

