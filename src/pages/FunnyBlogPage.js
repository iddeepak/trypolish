// src/pages/FunnyBlogPage.js

import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Re‐declare the same data here or extract to a shared file if you prefer
const funnyPosts = [
  {
    id: 1,
    title: '🤣 Clean Code Ka Masaledar Tadka',
    content: `
      ## 🤣 Clean Code Ka Masaledar Tadka
      
      - Code ko chhota rakho, lekin usme masala daalo—jaise hero ka dialogue hota hai!
      - Har function sirf ek kaam kare: Single Responsibility Principle.
      - Naam chuna aise, sabko yaad rahe—hero jaise.
      - Test likho, warna code cake jaisa gir jaayega!
      
      (Yeh poora blog content hai Funny mode post #1 ke liye.)
    `.trim(),
  },
  {
    id: 2,
    title: 'SOLID Principles – Comedy Edition',
    content: `
      ## SOLID Principles – Comedy Edition
      
      1. **Single Responsibility** – Har class sirf ek hi kaam kare, varna hero ki tarah villain ban jaayega.
      2. **Open/Closed** – Code ko extend karo, modify mat karo—hero ki entry jaisa hona chahiye.
      3. **Liskov Substitution** – Subclass base class ki jagah dhal jaaye—jaise movie mein double role.
      4. **Interface Segregation** – Chhote interfaces do, na ki ek bada blockbuster interface.
      5. **Dependency Inversion** – Abstractions pe depend karo, concretion pe mat—hero base class ho, detail classes plot twist ho.

      (Yeh poora blog content hai Funny mode post #2 ke liye.)
    `.trim(),
  },
  {
    id: 3,
    title: 'DRY vs. KISS: Yeh Toh Masla Hai',
    content: `
      ## DRY vs. KISS: Yeh Toh Masla Hai
      
      - **DRY**: Don’t Repeat Yourself—agar bar bar repeat karoge, code flop ho jaayega.
      - **KISS**: Keep It Simple—complexity se bachke raho, simple hi hero hai.
      - Kabhi kabhi DRY over‐abstraction kar deta hai, kabhi KISS duplication fail ho jaata hai.
      - Balance banaye raho, warna code flop ho sakta hai!

      (Yeh poora blog content hai Funny mode post #3 ke liye.)
    `.trim(),
  },
];

export default function FunnyBlogPage() {
  const { postId } = useParams();
  const post = funnyPosts.find((p) => p.id === Number(postId));

  if (!post) {
    return (
      <div className="p-6 max-w-3xl mx-auto text-pink-700 font-mono">
        <h2 className="text-2xl font-extrabold mb-4">Post Not Found</h2>
        <Link to="/" className="text-blue-600 underline">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <article className="p-6 max-w-3xl mx-auto text-pink-700 font-mono">
      <h1 className="text-4xl font-extrabold mb-4">{post.title}</h1>
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
