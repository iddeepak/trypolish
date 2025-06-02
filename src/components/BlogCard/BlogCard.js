
/**
 * BlogCard: Renders a single post’s title and excerpt in a styled card.
 * Props:
 *   - title: string
 *   - excerpt: string
 */
export default function BlogCard({ title, excerpt }) {
  return (
    <div className="BlogCard bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300">
      <div className="BlogCard__content p-5">
        <h3 className="BlogCard__title text-xl font-semibold mb-2">{title}</h3>
        <p className="BlogCard__excerpt text-gray-600 leading-relaxed">{excerpt}</p>
      </div>
    </div>
  );
}
