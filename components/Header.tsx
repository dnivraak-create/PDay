
import React from 'react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  return (
    <header className="w-full pt-2 pb-1 px-6 flex justify-center items-center">
      <h1 className="text-xl font-romantic text-rose-500 font-bold tracking-tight text-center">For Jasmine 🌸✨</h1>
    </header>
  );
};

export default Header;
