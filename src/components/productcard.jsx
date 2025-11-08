export default function ProductCard({ title, price, img }) {
  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-pink-500/20 transition-all duration-300 p-4">
      <img
        src={img}
        alt={title}
        className="rounded-xl w-full h-48 object-cover mb-4"
      />
      <h3 className="text-lg font-semibold text-pink-400">{title}</h3>
      <p className="text-gray-400 mt-1">{price}</p>
      <button className="mt-3 bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 rounded-lg w-full transition-all">
        View Details
      </button>
    </div>
  );
}
