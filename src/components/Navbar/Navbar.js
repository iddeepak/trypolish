// src/components/Navbar/Navbar.js

import React from 'react';
import { useMode } from '../../contexts/ModeContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const { mode, setMode } = useMode();
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  function handleToggle() {
    // Flip the mode state first
    const newMode = mode === 'simple' ? 'funny' : 'simple';
    setMode(newMode);

    // If on a single‐post route, swap the prefix
    // e.g. /simple/2  → /funny/2,   or  /funny/3 → /simple/3
    const parts = pathname.split('/');
    // parts[1] is '' (since pathname begins with '/'), parts[1] would be 'simple' or 'funny'
    // but splitting on '/', e.g. '/simple/2'.split('/') yields ["", "simple", "2"]
    if (parts.length === 3 && (parts[1] === 'simple' || parts[1] === 'funny')) {
      const postId = parts[2];
      // Navigate to the new path for that post ID
      navigate(`/${newMode}/${postId}`);
    }
    // Otherwise (e.g. if path is '/'), do nothing else—mode toggle alone updates the homepage view
  }

  return (
    <nav className="flex justify-center items-center p-4 bg-white shadow-md">
      <div className="flex items-center gap-4">
        {/*
          Clicking this label always returns you to "/". 
          We keep select-none/cursor-default to prevent a text cursor.
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
