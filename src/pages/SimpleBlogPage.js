// src/pages/SimpleBlogPage.js

import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Re‐declare the same data including imageUrl
const simplePosts = [
  {
    id: 1,
    title: 'How to Write Clean Code',
    imageUrl:
      'https://images.pexels.com/photos/669620/pexels-photo-669620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400', // larger placeholder
    content: `
## How to Write Clean Code

Writing clean code means:
- Functions should do one thing (Single Responsibility).
- Name variables/functions clearly.
- Write tests to maintain quality as code grows.
- Keep each file small and focused.

This is your “entire blog” content for post #1 in Simple mode.
    `.trim(),
  },
  {
    id: 2,
    title: 'Understanding SOLID Principles',
    imageUrl:
      'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400',
    content: `
## Understanding SOLID Principles

1. **Single Responsibility**: A class/module should have one reason to change.
2. **Open/Closed**: Code should be open for extension, closed for modification.
3. **Liskov Substitution**: Subclasses must be usable via their base types.
4. **Interface Segregation**: Many client‐specific interfaces are better than one general interface.
5. **Dependency Inversion**: Depend on abstractions, not concretion.

This is your “entire blog” content for post #2 in Simple mode.
    `.trim(),
  },
  {
    id: 3,
    title: 'DRY vs. KISS: Striking the Right Balance',
    imageUrl:
      'https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400',
    content: `
## DRY vs. KISS: Striking the Right Balance

- **DRY** (Don’t Repeat Yourself): Avoid duplicating logic.
- **KISS** (Keep It Simple, Stupid): Prefer the simplest solution.
- Sometimes DRY can lead to over‐abstraction. KISS can lead to duplication. Balance is key.

This is your “entire blog” content for post #3 in Simple mode.
    `.trim(),
  },
];

export default function SimpleBlogPage() {
  const { postId } = useParams();
  const post = simplePosts.find((p) => p.id === Number(postId));

  if (!post) {
    return (
      <div className="p-6 max-w-3xl mx-auto text-gray-800">
        <h2 className="text-2xl font-bold mb-4">Post Not Found</h2>
        <Link to="/" className="text-blue-600 underline">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <article className="p-6 max-w-3xl mx-auto text-gray-800">
      {/* Header Image */}
      <div className="mb-6 h-60 w-full overflow-hidden rounded-lg shadow-lg">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="object-cover w-full h-full"
        />
      </div>

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      {post.content.split('\n\n').map((para, idx) => (
        <p key={idx} className="leading-relaxed mb-4">
          {para.replace(/^## /, '')}
        </p>
      ))}

      <Link to="/" className="text-blue-600 underline">
        ← Back to Home
      </Link>
    </article>
  );
}
