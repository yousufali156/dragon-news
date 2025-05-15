// src/components/Register.jsx
import React from 'react';
import logo from '../assets/Dragon-logo.png';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-500 px-4">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-4xl p-8 sm:p-12 flex flex-col lg:flex-row relative">
        <div className="lg:w-1/2 flex flex-col justify-center items-center p-4 lg:p-8 bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-2xl lg:rounded-none">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4">
            <img src={logo} alt="JobFinder Logo" className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-semibold">Welcome to Registration</h2>
        </div>

        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">Sign Up to JobFinder</h2>

          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <div className="flex items-center text-sm text-gray-500">
              <input type="checkbox" className="mr-2" required />
              <span>I accept the Terms of Use and Privacy Policy</span>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 rounded-full text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 transition"
            >
              Register
            </button>

            <p className="text-sm text-center text-gray-500 mt-4">
              Already a member? <a href="#" className="text-blue-500 hover:underline">Sign In</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
