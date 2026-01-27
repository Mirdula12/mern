import React from 'react'
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
    const product =[
        {id:1, name:"Laptop", price:30000,description:"Acer laptop with 8GB RAM"},
        {id:2, name:"Mouse", price:1000,description:"Wireless mouse"},
        {id:3, name:"Mobile", price:50000,description:"Latest model smartphone"},
        {id:4, name:"Keyboard", price:3000,description:"Mechanical keyboard with backlight"},
    ]
    const {id} = useParams();
    const products=product.find((p)=>p.id===Number(id));
  return (
    <div>
      <h1>Product Details Page</h1>
      <h2>{products.name}</h2>
      <p>Price:{products.price}</p>
      <p>{products.description}</p>
    </div>
  )
}

export default ProductDetails
