import React from 'react';
import '../styles/BigCard.css';

interface BigCardProps {
  name: string;
  email: string;
  phoneNumber: string;
  facebook: string;
  linkedin: string;
  github: string;
  gitlab?: string;
  onClose: () => void;
}

function BigCard({ name, email, phoneNumber, facebook, linkedin, github, gitlab, onClose }: BigCardProps) {
  return (
    <div className="big-card-overlay" onClick={onClose}>
      <div className="big-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>{name}</h2>
        <div className="card-details">
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phoneNumber}</p>
            <p><strong>Facebook:</strong> <a href={facebook} target="_blank" rel="noopener noreferrer">{facebook}</a></p>
            <p><strong>LinkedIn:</strong> <a href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</a></p>
            <p><strong>GitHub:</strong> <a href={github} target="_blank" rel="noopener noreferrer">{github}</a></p>
            <p><strong>GitLab:</strong> <a href={gitlab} target="_blank" rel="noopener noreferrer">{gitlab}</a></p>
        </div>
      </div>
    </div>
  );
}

export default BigCard;