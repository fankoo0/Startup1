import React from 'react';

interface HeaderProps {
  projectName: string;
}

const Header: React.FC<HeaderProps> = ({ projectName }) => {
  return (
    <header className="header">
      <div className="logo">{projectName}</div>
      <button className="register-btn">Регистрация</button>
    </header>
  );
};

export default Header; 