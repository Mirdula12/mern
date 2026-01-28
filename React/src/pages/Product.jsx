import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1>Product Page</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.title}</h4>
          <h5>₹ {product.price}</h5>
          <Link to={`/product/${product.id}`}>View details</Link>
        </div>
      ))}

    </div>
  )
}

export default Product
