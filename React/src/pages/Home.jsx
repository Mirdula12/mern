// import React from 'react'
// import Profile from '../components/Profile'
// import Parent from '../components/Parent'
// import { Link } from 'react-router-dom'
// import{userContext}from '../App'
// import { useState } from 'react'

// const Home = () => {
//   const[user,setUser]=useState("Mirdula")
//   return (
//     <div>
//       <div><h1>APP</h1></div>
//       <Link to="/form">Form</Link><br/>
//       <Link to="/state">State</Link><br/>
//       <Link to="/reducer">Reducer</Link><br/>
//       <userContext.Provider value={user}>
//           <Profile 
//             age={20} 
//             skills={["HTML","CSS","JS","JAVA","NODE"]} 
//           />
//        </userContext.Provider>
      
//       <Parent /> 
//     </div>
//   )
// }

// export default Home

import React, { useState } from 'react'
import Profile from '../components/Profile'
import Parent from '../components/Parent'
import { Link } from 'react-router-dom'
import { userContext } from '../App'

const Home = () => {
  const [user, setUser] = useState("Mirdula")

  return (
    <>
      <style>{`
        .home-container {
          min-height: 100vh;
          padding: 2rem;
          background: linear-gradient(135deg, #eaf3ff, #f6fbff);
          text-align: center;
          font-family: "Segoe UI", sans-serif;
        }

        .app-title {
          color: #2b5dab;
          margin-bottom: 1.5rem;
          font-size: 2.5rem;
        }

        .nav-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .nav-links a {
          text-decoration: none;
          padding: 0.6rem 1.4rem;
          border-radius: 8px;
          background-color: #dbeafe;
          color: #1e3a8a;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .nav-links a:hover {
          background-color: #bfdbfe;
          transform: translateY(-2px);
        }

        .content-card {
          background: #ffffff;
          margin: 1.5rem auto;
          padding: 1.5rem;
          border-radius: 14px;
          max-width: 520px;
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.15);
        }
      `}</style>

      <div className="home-container">
        <h1 className="app-title">APP</h1>

        <div className="nav-links">
          <Link to="/form">Form</Link>
          <Link to="/state">State</Link>
          <Link to="/reducer">Reducer</Link>
        </div>

        <div className="content-card">
          <userContext.Provider value={user}>
            <Profile 
              age={20} 
              skills={["HTML","CSS","JS","JAVA","NODE"]} 
            />
          </userContext.Provider>
        </div>

        <div className="content-card">
          <Parent />
        </div>
      </div>
    </>
  )
}

export default Home
