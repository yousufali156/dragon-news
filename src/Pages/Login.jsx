import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center px-4 py-8 sm:px-6">
            <div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-sm border border-white/20">
                <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-6">Login Your Account 👋</h2>

                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm text-white mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                            placeholder="Enter Your Email"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm text-white mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-white/80 gap-2 sm:gap-0">
                        <label className="flex items-center">
                            <input type="checkbox" className="accent-white mr-2" />
                            Remember me
                        </label>
                        <a href="#" className="hover:underline text-right">Forgot password?</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-white text-indigo-700 font-semibold rounded-lg shadow-md hover:bg-indigo-100 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-sm text-center text-white/80 mt-6">
                    Don&apos;t have an account? <Link to="/auth/register" className="underline hover:text-white">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
