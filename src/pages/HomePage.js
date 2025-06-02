// src/pages/HomePage.js

import React from 'react';
import BlogList from '../components/BlogList/BlogList';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <BlogList />
    </main>
  );
}
