// import React from 'react'

// const Contact = () => {
//   return (
//     <div>
//         Contact
//     </div>
//   )
// }

// export default Contact

import React from 'react'

const Contact = () => {
  return (
    <>
      <style>{`
        .contact-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #eaf3ff, #f6fbff);
          font-family: "Segoe UI", sans-serif;
        }

        .contact-card {
          background: #ffffff;
          padding: 2.5rem 3rem;
          border-radius: 16px;
          font-size: 1.5rem;
          font-weight: 600;
          color: #2b5dab;
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.18);
        }
      `}</style>

      <div className="contact-container">
        <div className="contact-card">
          Contact
        </div>
      </div>
    </>
  )
}

export default Contact
