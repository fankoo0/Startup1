import React from 'react';
import { AIModel } from '../types';

interface ModelCardProps {
  model: AIModel;
  onTryInChat: (model: AIModel) => void;
}

const ModelCard: React.FC<ModelCardProps> = ({ model, onTryInChat }) => {
  return (
    <div className="model-card">
      <h3 className="model-name">{model.name}</h3>
      <p className="model-description">{model.description}</p>
      <div className="model-actions">
        <button 
          className="chat-button" 
          onClick={() => onTryInChat(model)}
        >
          Попробовать в чате
        </button>
      </div>
    </div>
  );
};

export default ModelCard; 