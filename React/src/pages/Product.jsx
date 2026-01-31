// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

// const Product = () => {
//   const [products, setProducts] = useState([])
//   const getProducts =async () => {
//     const res=await axios.get('https://fakestoreapi.com/products')
//     setProducts(res.data)
//   }
//   useEffect(() => {
//     getProducts()
//   }, [])

//   return (
//     <div>
//       <h1>Product Page</h1>

//       {products.map((product) => (
//         <div key={product.id}>
//           <h4>{product.title}</h4>
//           <h5>₹ {product.price}</h5>
//           <Link to={`/product/${product.id}`}>View details</Link>
//         </div>
//       ))}

//     </div>
//   )
// }

// export default Product

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Product = () => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const res = await axios.get('https://fakestoreapi.com/products')
    setProducts(res.data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <style>{`
        .product-page {
          min-height: 100vh;
          padding: 2rem;
          background: linear-gradient(135deg, #eaf3ff, #f6fbff);
          font-family: "Segoe UI", sans-serif;
        }

        .product-page h1 {
          text-align: center;
          color: #2b5dab;
          margin-bottom: 2rem;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .product-card {
          background: #ffffff;
          padding: 1.5rem;
          border-radius: 14px;
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.15);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(37, 99, 235, 0.25);
        }

        .product-card h4 {
          color: #1e3a8a;
          margin-bottom: 0.5rem;
        }

        .product-card h5 {
          color: #2563eb;
          margin-bottom: 0.8rem;
        }

        .product-card a {
          text-decoration: none;
          color: #ffffff;
          background: #3b82f6;
          padding: 0.4rem 0.9rem;
          border-radius: 8px;
          font-size: 0.9rem;
          transition: background 0.2s;
        }

        .product-card a:hover {
          background: #2563eb;
        }
      `}</style>

      <div className="product-page">
        <h1>Product Page</h1>

        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <h4>{product.title}</h4>
              <h5>₹ {product.price}</h5>
              <Link to={`/product/${product.id}`}>View details</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Product
