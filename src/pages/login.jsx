import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="card w-96">
        <h2 className="text-3xl text-pink-300 text-center mb-6 font-bold drop-shadow-lg">
          Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 p-3 bg-white/10 text-white border border-white/20 rounded-md focus:ring-2 focus:ring-pink-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 bg-white/10 text-white border border-white/20 rounded-md focus:ring-2 focus:ring-pink-400"
        />

        <button className="btn w-full">Login</button>

        <p className="text-gray-300 mt-4 text-center">
          Don't have an account?{" "}
          <a href="/register" className="text-pink-400 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
