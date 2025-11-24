import React from 'react';

interface CVProps {
  title: string;
  description: string;
}

function CV({title, description}: CVProps)  {  
    return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default CV;