import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
  const [product, setProduct] = useState({})
   const {id} = useParams();
  useEffect(()=>{
         fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => setProduct(data));
  },[])
    
  return (
    <div>
      <h1>Product Details Page</h1>
      <h2>{product.title}</h2>
      <p>Price:{product.price}</p>
      <p>{product.description}</p>
    </div>
  )
}

export default ProductDetails
