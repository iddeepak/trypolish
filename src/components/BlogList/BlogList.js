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
  },
  {
    id: 2,
    title: 'Understanding SOLID Principles',
    excerpt:
      'Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion—these five pillars make your code robust.',
  },
  {
    id: 3,
    title: 'DRY vs. KISS: Striking the Right Balance',
    excerpt:
      'Don’t Repeat Yourself and Keep It Simple. Reusable code is great, but over-engineering leads to complexity.',
  },
];

// Sample data for “Funny” mode posts
const funnyPosts = [
  {
    id: 1,
    title: '🤣 Clean Code Ka Masaledar Tadka',
    excerpt:
      'Code chhota rakhna, par masaledar—jaise hero ka dialogue! Single Responsibility, samjhe? 😉',
  },
  {
    id: 2,
    title: 'SOLID Principles – Comedy Edition',
    excerpt:
      'Single Responsibility se lekar Dependency Inversion tak—ye guidelines aapke code ko hero banayengi.',
  },
  {
    id: 3,
    title: 'DRY vs. KISS: Yeh Toh Masla Hai',
    excerpt:
      'Don’t Repeat Yourself aur Keep It Simple—agar dono sahi se milein, code screen pe gaana gaayega.',
  },
];

export default function BlogList() {
  const { mode } = useMode();
  const posts = mode === 'simple' ? simplePosts : funnyPosts;

  return (
    <div className="BlogList p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            className="BlogList__card-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: post.id * 0.1 }}
          >
            <BlogCard title={post.title} excerpt={post.excerpt} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
