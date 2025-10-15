import React from 'react';

const User = ({ name, department, skills, projects }) => {
  return (
    <div>
      <h2>About</h2>
      I am {name} <br></br>{department} department 
      <h2>Skills</h2>
      <ol>
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ol>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li>{project}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;
