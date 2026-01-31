import React from "react";


const Info = () => {
  const name = "Mirdula";
  const department = "CSE";
  const skills = ["HTML", "CSS", "JS", "JAVA"];
  const projects = [
    "Prediction of Stock Market",
    "Smart Question Paper Generator",
    "Food Ordering Website",
  ];

  return (
    <div className="info-container">
      <h1>My Information</h1>

      <div className="info-section">
        <h2>I am {name}</h2>
       
      </div>

      <div className="info-section">
        <h2>Department of {department}</h2>
        
      </div>

      <div className="info-section">
        <h2>Skills:</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index} className="info-value">{skill}</li>
          ))}
        </ul>
      </div>

      <div className="info-section">
        <h2>Projects:</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index} className="info-value">{project}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Info;
