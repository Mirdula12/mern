import React from 'react';
import { Link } from 'react-router-dom'; 

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/State">useState</Link> <br></br>
        </li>
        <li>
          <Link to="/Effect">useEffect</Link> 
        </li>
      </ul>


    </div>
    
    
  );
};

export default Home;
