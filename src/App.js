// src/App.js
import React from 'react';
import { ModeProvider } from './contexts/ModeContext';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <ModeProvider>
      <Navbar />
      <HomePage />
    </ModeProvider>
  );
}
