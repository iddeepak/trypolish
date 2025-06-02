// src/components/Navbar/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useMode } from '../../contexts/ModeContext';

export default function Navbar() {
  const { mode, setMode } = useMode();

  function handleToggle() {
    setMode(mode === 'simple' ? 'funny' : 'simple');
  }

  return (
    <nav className="flex justify-center items-center p-4 bg-white shadow-md">
      <div className="flex items-center gap-4">
        {/** 
           * Wrapping the mode label in a Link → always navigates to "/"
           * select-none prevents text cursor; cursor-default forces arrow
           */}
        <Link 
          to="/" 
          className="select-none cursor-default text-sm font-semibold"
        >
          {mode === 'simple' ? '📝 Simple' : '🤣 Funny'}
        </Link>

        <button
          onClick={handleToggle}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer"
        >
          {mode === 'simple' ? 'Funny' : 'Simple'}
        </button>
      </div>
    </nav>
  );
}
