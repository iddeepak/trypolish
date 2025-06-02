// src/components/BlogCard/BlogCard.js

import React from 'react';

export default function BlogCard({ title, excerpt }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300">
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{excerpt}</p>
      </div>
    </div>
  );
}
