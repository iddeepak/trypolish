import React from 'react';

export default function SimpleBlogPage() {
  return (
    <article className="SimpleBlogPage p-6 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-4">How to Write Clean Code</h1>
      <p className="leading-relaxed">
        Keep your functions small, use meaningful variable and function names,
        and follow the Single Responsibility Principle. Always write tests
        to ensure your code stays maintainable as it grows.
      </p>
    </article>
  );
}
