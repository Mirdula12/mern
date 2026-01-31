// import React from 'react'
// import {useState,useEffect} from 'react'
// import axios from 'axios'
// const Form = () => {
//     const[form,setForm]=useState({
//         name:"",
//         email:"",
//         age:"",
//         department:""
//     })
//     const handleChange=(e)=>{
//         const{name,value}=e.target
//         setForm((prev)=>({
//             ...prev, //Spread operator - to copy previous state
//             [name]:value
//         }))
//     }
//     useEffect(() => {
//       console.log("From useEffect");
//     })
//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         console.log(form)
//     }
//   return (
//     <div>
//         <h2>Form Handling Example</h2>
//         <form onSubmit={handleSubmit}>
//             <label htmlFor='name'>Name:</label>
//             <input className= "border rounded-xl mt-4 focus:ring -2"type="text" id='name' name='name' value={form.name} onChange={handleChange} /><br/><br/>
//             <label htmlFor='email'>Email:</label>
//             <input className= "border rounded-xl mt-4 focus:ring -2" type="text" id='email' name='email' value={form.email} onChange={handleChange} /><br/><br/>
//             <label htmlFor='age'>Age:</label>
//             <input className= "border rounded-xl mt-4 focus:ring -2" type="number" id='age' name='age' value={form.age}onChange={handleChange} /><br/><br/>
//             <label htmlFor='department'>Department:</label>
//             <input className= "border rounded-xl mt-4 focus:ring -2"type="text" id='department' name='department' value={form.department}onChange={handleChange} /><br/><br/>
//             <button type='submit'>Submit</button>
//         </form>
//     </div>
//   )
// }

// export default Form

import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    department: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  useEffect(() => {
    console.log("From useEffect")
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <>
      <style>{`
        .form-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #eaf3ff, #f6fbff);
          font-family: "Segoe UI", sans-serif;
        }

        .form-card {
          background: #ffffff;
          padding: 2rem 2.5rem;
          border-radius: 16px;
          width: 100%;
          max-width: 420px;
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.18);
        }

        .form-card h2 {
          text-align: center;
          color: #2b5dab;
          margin-bottom: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 1.2rem;
        }

        .form-group label {
          margin-bottom: 0.4rem;
          font-weight: 500;
          color: #1e3a8a;
        }

        .form-group input {
          padding: 0.6rem 0.8rem;
          border-radius: 8px;
          border: 1px solid #c7d2fe;
          outline: none;
          transition: border 0.2s, box-shadow 0.2s;
        }

        .form-group input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.25);
        }

        .submit-btn {
          width: 100%;
          padding: 0.7rem;
          margin-top: 1rem;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: #ffffff;
          font-size: 1rem;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(37, 99, 235, 0.4);
        }
      `}</style>

      <div className="form-container">
        <div className="form-card">
          <h2>Form Handling Example</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                value={form.age}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="department">Department</label>
              <input
                type="text"
                id="department"
                name="department"
                value={form.department}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form
