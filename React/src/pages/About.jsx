// import React from 'react'

// const About = () => {
//   return (
//     <div>
//       About
//     </div>
//   )
// }

// export default About

import React from 'react'

const About = () => {
  return (
    <>
      <style>{`
        .about-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #eaf3ff, #f6fbff);
          font-family: "Segoe UI", sans-serif;
        }

        .about-card {
          background: #ffffff;
          padding: 2.5rem 3rem;
          border-radius: 16px;
          font-size: 1.5rem;
          font-weight: 600;
          color: #2b5dab;
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.18);
        }
      `}</style>

      <div className="about-container">
        <div className="about-card">
          About
        </div>
      </div>
    </>
  )
}

export default About
