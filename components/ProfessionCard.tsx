import React from 'react';
import { Profession } from '../types';

interface ProfessionCardProps {
  profession: Profession;
  isActive: boolean;
  onClick: (profession: Profession) => void;
}

const ProfessionCard: React.FC<ProfessionCardProps> = ({ profession, isActive, onClick }) => {
  return (
    <div 
      className={`profession-card ${isActive ? 'active' : ''}`} 
      onClick={() => onClick(profession)}
    >
      <h3>{profession.name}</h3>
    </div>
  );
};

export default ProfessionCard; 