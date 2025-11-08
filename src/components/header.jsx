import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="bg-slate-950 text-gray-100 shadow-md py-3 px-6 flex flex-col sm:flex-row items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-3 sm:mb-0">
        <img src="/logo.png" alt="logo" className="h-10 w-10 rounded-full" />
        <h1 className="text-2xl font-bold text-pink-400">HandicraftsHub</h1>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-2xl w-full px-4">
        <SearchBar />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-3 sm:mt-0">
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg shadow-md transition-all">
          Customer Login
        </button>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md transition-all">
          Seller Login
        </button>
      </div>
    </header>
  );
}
