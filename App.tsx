import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TabsNavigation, { Tab } from './components/TabsNavigation';
import CategoryCard from './components/CategoryCard';
import ProfessionCard from './components/ProfessionCard';
import ModelsPanel from './components/ModelsPanel';
import ChatTab from './components/ChatTab';
import { categoriesData } from './data';
import { Category, Profession, AIModel } from './types';
import './style.css';

// В настоящее время активна только вкладка Store
// Остальные вкладки закомментированы для будущего использования
const tabs: Tab[] = [
  { id: 'store', name: 'Store' },
  // { id: 'subscriptions', name: 'Подписки' },
  // { id: 'favorites', name: 'Избранное' },
  // { id: 'settings', name: 'Настройки' }
];

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedProfession, setSelectedProfession] = useState<Profession | null>(null);
  const [activeTab, setActiveTab] = useState<string>('store');
  
  // Состояние для хранения открытых вкладок
  const [tabs, setTabs] = useState<Tab[]>([
    { id: 'store', name: 'Store' },
  ]);
  
  // Состояние для хранения открытых моделей в чате
  const [chatModels, setChatModels] = useState<Record<string, AIModel>>({});
  
  // Состояние для хранения всех доступных моделей
  const [allModels, setAllModels] = useState<AIModel[]>([]);
  
  // Получаем все модели при первой загрузке
  useEffect(() => {
    const models: AIModel[] = [];
    categoriesData.forEach(category => {
      category.professions.forEach(profession => {
        profession.models.forEach(model => {
          if (!models.some(m => m.id === model.id)) {
            models.push(model);
          }
        });
      });
    });
    setAllModels(models);
  }, []);

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setSelectedProfession(null);
  };

  const handleProfessionClick = (profession: Profession) => {
    setSelectedProfession(profession);
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };
  
  // Обработчик открытия чата с моделью
  const handleTryModelInChat = (model: AIModel) => {
    const chatTabId = `chat-${model.id}`;
    
    // Проверяем, существует ли уже вкладка для этой модели
    if (!tabs.some(tab => tab.id === chatTabId)) {
      // Добавляем новую вкладку чата
      const newTab: Tab = {
        id: chatTabId,
        name: model.name,
        closable: true
      };
      
      setTabs([...tabs, newTab]);
      
      // Сохраняем данные о модели для чата
      setChatModels(prev => ({
        ...prev,
        [chatTabId]: model
      }));
    }
    
    // Активируем вкладку чата
    setActiveTab(chatTabId);
  };
  
  // Обработчик смены модели в чате
  const handleChangeModel = (model: AIModel) => {
    // Создаем новую вкладку чата для выбранной модели
    handleTryModelInChat(model);
  };
  
  // Обработчик открытия Store из чата
  const handleOpenStore = () => {
    // Проверяем, существует ли вкладка Store
    if (!tabs.some(tab => tab.id === 'store')) {
      // Добавляем вкладку Store, если она была закрыта
      const newTab: Tab = {
        id: 'store',
        name: 'Store'
      };
      setTabs([...tabs, newTab]);
    }
    
    // Активируем вкладку Store
    setActiveTab('store');
  };
  
  // Обработчик закрытия вкладки
  const handleTabClose = (tabId: string) => {
    // Не закрываем вкладку store
    if (tabId === 'store') return;
    
    // Получаем индекс вкладки, которую закрываем
    const tabIndex = tabs.findIndex(tab => tab.id === tabId);
    
    // Удаляем вкладку из списка
    const newTabs = tabs.filter(tab => tab.id !== tabId);
    setTabs(newTabs);
    
    // Если закрываем активную вкладку, переключаемся на предыдущую
    if (activeTab === tabId) {
      // Если удаляемая вкладка была последней, переключаемся на вкладку перед ней
      // В противном случае, активируем вкладку store
      const newActiveTab = tabIndex > 0 ? tabs[tabIndex - 1].id : 'store';
      setActiveTab(newActiveTab);
    }
    
    // Удаляем данные о модели для чата
    setChatModels(prev => {
      const newChatModels = { ...prev };
      delete newChatModels[tabId];
      return newChatModels;
    });
  };

  const renderTabContent = () => {
    // Если это вкладка чата
    if (activeTab.startsWith('chat-')) {
      const model = chatModels[activeTab];
      if (model) {
        return (
          <ChatTab 
            model={model} 
            allModels={allModels}
            onChangeModel={handleChangeModel}
            onOpenStore={handleOpenStore}
          />
        );
      }
      return null;
    }
    
    // Если это вкладка store
    if (activeTab === 'store') {
      return (
        <div className="main-content">
          <div className="main-intro">
            <h1>Каталог моделей искусственного интеллекта</h1>
          </div>
          
          <div className="categories-sidebar">
            <h2>Категории</h2>
            <div className="categories">
              {categoriesData.map(category => (
                <CategoryCard 
                  key={category.id} 
                  category={category} 
                  isActive={selectedCategory?.id === category.id}
                  onClick={handleCategoryClick}
                />
              ))}
            </div>
          </div>
          
          <div className="content-area">
            {selectedCategory ? (
              <div className="content-wrapper">
                <div className="left-panel">
                  <h2>Профессии в категории: {selectedCategory.name}</h2>
                  <div className="professions">
                    {selectedCategory.professions.map(profession => (
                      <ProfessionCard
                        key={profession.id}
                        profession={profession}
                        isActive={selectedProfession?.id === profession.id}
                        onClick={handleProfessionClick}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="right-panel">
                  <ModelsPanel 
                    selectedProfession={selectedProfession} 
                    onTryInChat={handleTryModelInChat}
                  />
                </div>
              </div>
            ) : (
              <ModelsPanel 
                selectedProfession={null} 
                onTryInChat={handleTryModelInChat}
              />
            )}
          </div>
        </div>
      );
    }
    
    return null;
  };

  return (
    <div className="container">
      <Header projectName="AI Models Catalog" />
      <TabsNavigation 
        tabs={tabs} 
        activeTab={activeTab} 
        onTabChange={handleTabChange} 
        onTabClose={handleTabClose}
      />
      {renderTabContent()}
    </div>
  );
};

export default App;
