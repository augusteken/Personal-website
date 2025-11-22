import React from 'react';

interface AboutProps {
  title: string;
  description: string;
}

function About({title, description}: AboutProps)  {  
    return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default About;