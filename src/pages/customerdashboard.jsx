import { Link } from "react-router-dom";

const CustomerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="flex justify-between items-center mb-8 border-b border-gray-700 pb-4">
        <h1 className="text-3xl font-bold text-yellow-400">Customer Dashboard</h1>
        <Link to="/" className="text-yellow-400 hover:underline">Logout</Link>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition">
          <h3 className="text-xl font-semibold mb-2">My Orders</h3>
          <p className="text-gray-400 text-sm">View and manage your recent orders.</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition">
          <h3 className="text-xl font-semibold mb-2">Wishlist</h3>
          <p className="text-gray-400 text-sm">Keep track of your favourite products.</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition">
          <h3 className="text-xl font-semibold mb-2">Account Settings</h3>
          <p className="text-gray-400 text-sm">Update your personal information.</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
