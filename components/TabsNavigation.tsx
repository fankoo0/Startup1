import React from 'react';

export interface Tab {
  id: string;
  name: string;
  closable?: boolean;
}

interface TabsNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  onTabClose?: (tabId: string) => void;
}

const TabsNavigation: React.FC<TabsNavigationProps> = ({ 
  tabs, 
  activeTab, 
  onTabChange,
  onTabClose 
}) => {
  // Определяем класс для контейнера табов в зависимости от количества табов
  const tabsContainerClass = `tabs-container ${tabs.length === 1 ? 'single-tab' : 'multiple-tabs'}`;
  
  // Определяем, нужно ли показывать крестики (только если вкладок больше одной)
  const showCloseButtons = tabs.length > 1;
  
  const handleTabClose = (e: React.MouseEvent, tabId: string) => {
    e.stopPropagation(); // Предотвращаем активацию вкладки при нажатии на крестик
    if (onTabClose) {
      onTabClose(tabId);
    }
  };
  
  return (
    <div className="tabs-navigation">
      <div className={tabsContainerClass}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''} ${tabs.length === 1 ? 'full-width' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            <span className="tab-name">{tab.name}</span>
            {showCloseButtons && tab.closable && (
              <span 
                className="tab-close" 
                onClick={(e) => handleTabClose(e, tab.id)}
              >
                ×
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsNavigation; 