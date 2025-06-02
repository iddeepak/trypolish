// src/components/BlogCard/BlogCard.js

import React from 'react';

/**
 * BlogCard: Renders a single post’s image, title, and excerpt in a fixed-height card.
 *   - The outer <div> is a flex column set to h-full (fill its parent cell).
 *   - The image container is fixed at h-40 (10rem), cropping via object-cover.
 *   - The text block flex-grows so that every card matches the same height.
 *
 * Props:
 *   - title:   string
 *   - excerpt: string
 *   - imageUrl: string
 */
export default function BlogCard({ title, excerpt, imageUrl }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300 h-full flex flex-col">
      {/* 1) Fixed‐height image container */}
      <div className="h-40 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2) Text section: padded, flex‐grow to fill remaining space */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed flex-grow">{excerpt}</p>
      </div>
    </div>
  );
}
