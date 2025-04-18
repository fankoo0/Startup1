import React from 'react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  isActive: boolean;
  onClick: (category: Category) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, isActive, onClick }) => {
  return (
    <div 
      className={`category-card ${isActive ? 'active' : ''}`} 
      onClick={() => onClick(category)}
    >
      <h3>{category.name}</h3>
      <span className="profession-count">{category.professions.length} профессий</span>
    </div>
  );
};

export default CategoryCard; 