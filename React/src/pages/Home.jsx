import React from 'react'
import Profile from '../components/Profile'
import Parent from '../components/Parent'
import State from '../hooks/State'
import Form from '../hooks/Form'

const Home = () => {
  return (
    <div>
      <div><h1>APP</h1></div>

      <Profile 
        name="Miru" 
        age={20} 
        skills={["HTML","CSS","JS","JAVA","NODE"]} 
      />

      <Form />
      <State />
      <Parent /> 
    </div>
  )
}

export default Home
