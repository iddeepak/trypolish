// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ModeProvider } from './contexts/ModeContext';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import SimpleBlogPage from './pages/SimpleBlogPage';
import FunnyBlogPage from './pages/FunnyBlogPage';

export default function App() {
  return (
    <ModeProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Home renders the list of cards */}
          <Route path="/" element={<HomePage />} />

          {/* Single‐post pages */}
          <Route path="/simple/:postId" element={<SimpleBlogPage />} />
          <Route path="/funny/:postId" element={<FunnyBlogPage />} />
        </Routes>
      </Router>
    </ModeProvider>
  );
}
