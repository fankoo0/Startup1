import React, { useState } from 'react';
import { AIModel } from '../types';

interface ChatMessage {
  id: number;
  text: string;
  isUser: boolean;
}

interface ChatTabProps {
  model: AIModel;
  allModels: AIModel[];
  onChangeModel: (model: AIModel) => void;
  onOpenStore: () => void;
}

const ChatTab: React.FC<ChatTabProps> = ({ model, allModels, onChangeModel, onOpenStore }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: `Здравствуйте! Я ${model.name}. Чем могу помочь?`,
      isUser: false
    }
  ]);
  const [inputText, setInputText] = useState<string>('');
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);
  const [showModelsList, setShowModelsList] = useState<boolean>(false);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputText.trim() === '') return;
    
    // Добавляем сообщение пользователя
    const userMessage: ChatMessage = {
      id: messages.length + 1,
      text: inputText,
      isUser: true
    };
    
    setMessages([...messages, userMessage]);
    setInputText('');
    
    // Имитируем ответ от модели
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: messages.length + 2,
        text: `Ответное сообщение на "${inputText}"`,
        isUser: false
      };
      
      setMessages(prevMessages => [...prevMessages, aiResponse]);
    }, 1000);
  };
  
  const toggleSettings = () => {
    setSettingsOpen(!settingsOpen);
    // Скрываем список моделей при закрытии настроек
    if (settingsOpen) {
      setShowModelsList(false);
    }
  };
  
  const toggleModelsList = () => {
    setShowModelsList(!showModelsList);
  };
  
  const handleModelSelect = (selectedModel: AIModel) => {
    if (selectedModel.id !== model.id) {
      onChangeModel(selectedModel);
    }
    setShowModelsList(false);
  };
  
  return (
    <div className="chat-container">
      {/* Кнопка шестеренки */}
      <button 
        className="settings-button" 
        onClick={toggleSettings}
        aria-label="Настройки"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z" fill="currentColor"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M8.84 2.8C9.25 2.29 9.91 2 10.5 2H10.59C11.48 2 12.39 2.46 12.75 3.27L12.79 3.38C12.83 3.46 12.89 3.56 12.97 3.66C13.14 3.87 13.39 4 13.67 4C13.74 4 13.82 3.99 13.9 3.98L14.21 3.9H14.22C14.35 3.88 14.49 3.86 14.61 3.86C15.13 3.86 15.64 4.06 16.04 4.43L16.37 4.74C16.6 4.95 16.9 5.28 17.11 5.67C17.35 6.14 17.43 6.6 17.35 7.06C17.26 7.65 16.84 8.14 16.26 8.31L16.12 8.35C15.85 8.44 15.63 8.62 15.5 8.86C15.38 9.1 15.36 9.36 15.44 9.6L15.46 9.66L15.48 9.72C15.62 10.17 15.68 10.5 15.68 10.83C15.68 11.1 15.65 11.37 15.58 11.64L15.53 11.83C15.44 12.17 15.26 12.49 15 12.74C14.67 13.05 14.24 13.21 13.8 13.16L13.29 13.11C13.21 13.1 13.13 13.1 13.04 13.1C12.74 13.1 12.46 13.25 12.28 13.5C12.17 13.65 12.11 13.84 12.11 14.03V14.12C12.11 14.19 12.12 14.26 12.13 14.33L12.15 14.47C12.2 14.92 12.08 15.33 11.81 15.66C11.58 15.93 11.25 16.1 10.9 16.14C10.43 16.2 9.95 16.03 9.63 15.68L9.58 15.63C9.48 15.53 9.37 15.42 9.25 15.33C9.01 15.17 8.73 15.08 8.45 15.08C8.38 15.08 8.31 15.09 8.24 15.1L8.08 15.13C7.94 15.16 7.8 15.17 7.65 15.17C7.01 15.17 6.38 14.9 5.93 14.42C5.71 14.18 5.37 13.61 5.25 13.13C5.15 12.81 5.16 12.47 5.27 12.15C5.38 11.84 5.59 11.57 5.87 11.41L5.98 11.35C6.21 11.23 6.38 11.02 6.45 10.77C6.52 10.52 6.49 10.26 6.37 10.03L6.35 9.99C6.14 9.62 6.04 9.21 6.04 8.8C6.04 8.44 6.12 8.09 6.28 7.77L6.33 7.65C6.44 7.35 6.46 7.03 6.39 6.72C6.33 6.4 6.16 6.11 5.92 5.9L5.83 5.83L5.74 5.76C5.39 5.5 5.16 5.1 5.12 4.67C5.07 4.09 5.28 3.52 5.69 3.09L5.93 2.84C6.26 2.51 6.71 2.29 7.19 2.25C7.46 2.22 7.74 2.27 8 2.37L8.12 2.41C8.35 2.48 8.59 2.46 8.81 2.35C8.82 2.33 8.83 2.32 8.84 2.8ZM10.57 4H10.51C10.44 4 10.37 4.03 10.33 4.09L10.23 4.23C10.07 4.45 9.85 4.61 9.59 4.7C8.89 4.95 8.12 4.78 7.64 4.29C7.58 4.23 7.51 4.19 7.43 4.17C7.33 4.15 7.23 4.17 7.15 4.23L7.02 4.35C6.94 4.43 6.9 4.53 6.91 4.65C6.91 4.77 6.96 4.87 7.04 4.94L7.14 5.02C7.49 5.31 7.74 5.71 7.85 6.15C7.95 6.6 7.93 7.07 7.78 7.51L7.73 7.63C7.64 7.82 7.59 8.03 7.59 8.25C7.59 8.56 7.67 8.87 7.84 9.13L7.85 9.16C8.13 9.67 8.18 10.27 7.99 10.82C7.82 11.37 7.41 11.81 6.89 12.05L6.79 12.1C6.72 12.14 6.67 12.2 6.65 12.28C6.64 12.36 6.66 12.44 6.71 12.51C6.75 12.57 6.84 12.74 6.91 12.81C7.07 12.98 7.3 13.08 7.53 13.08H7.54L7.75 13.07C8.02 13.04 8.28 13.06 8.54 13.11C9.16 13.23 9.71 13.57 10.1 14.07C10.23 14.24 10.34 14.33 10.51 14.35H10.52C10.65 14.36 10.77 14.31 10.86 14.21C10.95 14.12 10.99 13.99 10.98 13.86L10.96 13.72C10.95 13.59 10.94 13.46 10.94 13.33V13.28C10.94 12.66 11.17 12.07 11.59 11.61C12.02 11.14 12.61 10.86 13.25 10.83H13.38C13.64 10.83 13.89 10.77 14.13 10.66L14.32 10.56C14.51 10.46 14.57 10.33 14.57 10.25C14.57 10.08 14.53 9.89 14.43 9.57L14.41 9.51C14.21 8.9 14.28 8.23 14.59 7.67C14.9 7.1 15.43 6.71 16.06 6.57L16.21 6.53C16.42 6.48 16.46 6.31 16.47 6.22C16.49 6.07 16.46 5.93 16.38 5.81C16.29 5.66 16.17 5.53 16.05 5.42L15.92 5.3C15.72 5.12 15.47 5.02 15.21 5.02C15.16 5.02 15.12 5.03 15.07 5.03L14.76 5.11C14.54 5.16 14.32 5.18 14.1 5.18C13.47 5.18 12.88 4.9 12.47 4.41C12.26 4.15 12.08 3.88 11.94 3.62L11.93 3.61C11.92 3.59 11.92 3.58 11.92 3.57L11.9 3.52C11.83 3.36 11.68 3.27 11.51 3.27L11.49 3.26C11.33 3.26 11.19 3.34 11.11 3.48C11.02 3.62 10.82 4 10.57 4Z" fill="currentColor"/>
        </svg>
      </button>
      
      {/* Боковая панель настроек */}
      <div className={`settings-panel ${settingsOpen ? 'open' : ''}`}>
        <div className="settings-header">
          <h3>Настройки чата</h3>
          <button 
            className="close-settings" 
            onClick={toggleSettings}
            aria-label="Закрыть настройки"
          >
            ×
          </button>
        </div>
        
        <div className="settings-content">
          <button 
            className="settings-option" 
            onClick={toggleModelsList}
          >
            <span>Сменить модель</span>
            <span className="arrow">{showModelsList ? '▲' : '▼'}</span>
          </button>
          
          {showModelsList && (
            <div className="models-list">
              {allModels.map(m => (
                <div 
                  key={m.id} 
                  className={`model-option ${m.id === model.id ? 'active' : ''}`}
                  onClick={() => handleModelSelect(m)}
                >
                  {m.name}
                </div>
              ))}
            </div>
          )}
          
          <button 
            className="settings-option store-option" 
            onClick={onOpenStore}
          >
            Приобрести доп. модель
          </button>
        </div>
      </div>
      
      <div className="chat-messages">
        {messages.map(message => (
          <div 
            key={message.id} 
            className={`message ${message.isUser ? 'user-message' : 'ai-message'}`}
          >
            <div className="message-avatar">
              {message.isUser ? 'Вы' : model.name.charAt(0)}
            </div>
            <div className="message-content">
              <div className="message-sender">
                {message.isUser ? 'Вы' : model.name}
              </div>
              <div className="message-text">{message.text}</div>
            </div>
          </div>
        ))}
      </div>
      
      <form className="chat-input-form" onSubmit={handleSendMessage}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Введите сообщение..."
          className="chat-input"
        />
        <button type="submit" className="chat-send-button">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default ChatTab; 