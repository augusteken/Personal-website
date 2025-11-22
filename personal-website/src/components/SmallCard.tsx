import React from 'react';
import '../styles/SmallCard.css';

interface SmallCardProps {
    name: string;
    email: string;
    phoneNumber: string;
    onClick?: () => void;
}

function SmallCard({name, email, phoneNumber, onClick}: SmallCardProps) {
    return (
    <div className="small-card" onClick={onClick}>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{phoneNumber}</p>
      <p>{""}</p>
      <p className="click-info">Click to see more details</p>
    </div>
  );
}

export default SmallCard;