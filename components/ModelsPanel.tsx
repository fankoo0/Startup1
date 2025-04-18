import React from 'react';
import { Profession, AIModel } from '../types';
import ModelCard from './ModelCard';

interface ModelsPanelProps {
  selectedProfession: Profession | null;
  onTryInChat: (model: AIModel) => void;
}

const ModelsPanel: React.FC<ModelsPanelProps> = ({ selectedProfession, onTryInChat }) => {
  if (!selectedProfession) {
    return (
      <div className="models-section">
        <div className="select-category-prompt">
          <h2>Выберите категорию из списка слева</h2>
          <p>После выбора категории вы увидите список доступных профессий</p>
        </div>
      </div>
    );
  }

  return (
    <div className="models-section">
      <h2>Модели ИИ для профессии: {selectedProfession.name}</h2>
      {selectedProfession.models.length === 0 ? (
        <p>Для данной профессии пока нет рекомендуемых моделей ИИ</p>
      ) : (
        selectedProfession.models.map(model => (
          <ModelCard 
            key={model.id} 
            model={model} 
            onTryInChat={onTryInChat}
          />
        ))
      )}
    </div>
  );
};

export default ModelsPanel; 