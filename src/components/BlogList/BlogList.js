import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMode } from '../../contexts/ModeContext';
import BlogCard from '../BlogCard/BlogCard';
import { simplePosts, funnyPosts } from '../../data/posts';

export default function BlogList() {
  const { mode } = useMode();
  const posts = mode === 'simple' ? simplePosts : funnyPosts;
  const paginatedPosts = posts.slice(0, 1);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedPosts.map((post) => {
          const basePath = mode === 'simple' ? '/simple' : '/funny';
          return (
            <motion.div
              key={post.id}
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0 }}
            >
              <Link to={`${basePath}/${post.id}`} className="h-full">
                <BlogCard
                  title={post.title}
                  excerpt={post.excerpt}
                  imageUrl={post.imageUrl}
                />
              </Link>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-center items-center mt-8 space-x-2">
        <button
          disabled
          className="px-3 py-1 rounded-md bg-gray-300 text-gray-600 cursor-not-allowed"
        >
          Previous
        </button>

        <button className="px-3 py-1 rounded-md bg-orange-600 text-white">
          1
        </button>

        <button
          disabled
          className="px-3 py-1 rounded-md bg-gray-300 text-gray-600 cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}
