import React from 'react';
import '../styles/BigCard.css';
import facebookIcon from '../assets/facebook.png';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import gitlabIcon from '../assets/gitlab.png';

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
            <p><strong>Facebook:</strong> <a href={facebook} target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="Facebook" /></a></p>
            
            <p><strong>LinkedIn:</strong> <a href={linkedin} target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" /></a></p>
            <p><strong>GitHub:</strong> <a href={github} target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="GitHub" /></a></p>
            <p><strong>GitLab:</strong> <a href={gitlab} target="_blank" rel="noopener noreferrer"><img src={gitlabIcon} alt="GitLab" /></a></p>
        </div>
      </div>
    </div>
  );
}

export default BigCard;