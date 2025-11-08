import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white/10 backdrop-blur-lg border-b border-white/20 p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold text-pink-400">🎨 Handicrafts</h1>
        <div className="space-x-4">
          <Link to="/" className="text-gray-200 hover:text-pink-400 transition">Home</Link>
          <Link to="/login" className="text-gray-200 hover:text-pink-400 transition">Login</Link>
          <Link to="/register" className="text-gray-200 hover:text-pink-400 transition">Register</Link>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
