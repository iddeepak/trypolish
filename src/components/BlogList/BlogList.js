// src/components/BlogList/BlogList.js

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMode } from '../../contexts/ModeContext';
import BlogCard from '../BlogCard/BlogCard';

// Sample data for “Simple” mode posts
const simplePosts = [
  {
    id: 1,
    title: 'How to Write Clean Code',
    excerpt:
      'Keep functions short, name variables clearly, and follow the Single Responsibility Principle. Tests keep your code maintainable.',
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
    excerpt:
      'Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion—these five pillars make your code robust.',
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
    excerpt:
      'Don’t Repeat Yourself and Keep It Simple. Reusable code is great, but over-engineering leads to complexity.',
    content: `
      ## DRY vs. KISS: Striking the Right Balance
      
      - **DRY** (Don’t Repeat Yourself): Avoid duplicating logic.
      - **KISS** (Keep It Simple, Stupid): Prefer the simplest solution.
      - Sometimes DRY can lead to over‐abstraction. KISS can lead to duplication. Balance is key.
      
      This is your “entire blog” content for post #3 in Simple mode.
    `.trim(),
  },
];

// Sample data for “Funny” mode posts
const funnyPosts = [
  {
    id: 1,
    title: '🤣 Clean Code Ka Masaledar Tadka',
    excerpt:
      'Code chhota rakhna, par masaledar—jaise hero ka dialogue! Single Responsibility, samjhe? 😉',
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
    excerpt:
      'Single Responsibility se lekar Dependency Inversion tak—yeh guidelines aapke code ko hero banayengi.',
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
    excerpt:
      'Don’t Repeat Yourself aur Keep It Simple—agar dono sahi se milein, code screen pe gaana gaayega.',
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

export default function BlogList() {
  const { mode } = useMode();
  const posts = mode === 'simple' ? simplePosts : funnyPosts;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => {
          // Determine base route based on mode
          const basePath = mode === 'simple' ? '/simple' : '/funny';
          return (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: post.id * 0.1 }}
            >
              {/*
                Wrap the BlogCard in a Link so clicking navigates to "/simple/:postId" or "/funny/:postId"
              */}
              <Link to={`${basePath}/${post.id}`}>
                <BlogCard title={post.title} excerpt={post.excerpt} />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
