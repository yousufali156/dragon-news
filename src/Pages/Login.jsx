import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import logo from '../assets/Dragon-logo .png';
import { AuthContext } from '../Firebase/Provider/AuthProvider';

const Login = () => {
  const [error,  setError]=useState("");


  const { signIn } = use(AuthContext);
  const location = useLocation();
  const navigate=useNavigate();
  // console.log(location)


  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });


    signIn(email, password).then((result) => {
      const user = result.user;
      // console.log(user);
      navigate(`${location.state? location.state : "/"}`);

    })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        setError(errorCode);

      });

  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-500 px-4 py-4">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-4xl p-8 sm:p-12 flex flex-col lg:flex-row relative">

        {/* Left Logo Panel */}
        <div className="lg:w-1/2 flex rounded-2xl flex-col justify-center items-center p-4 lg:p-8 bg-gradient-to-r from-blue-600 to-indigo-500 text-white lg:rounded-3xl">
          <div className="flex rounded-full items-center justify-center mb-4 glow-border">
            <img src={logo} alt="Logo" className="w-full rounded-3xl" />
          </div>
          <h2 className="text-2xl text-center font-semibold">Welcome Back</h2>
        </div>

        {/* Right Form Panel */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <h2 className="text-2xl font-semibold text-center text-indigo-600">Login to Your Account</h2>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center text-sm text-gray-600">
              <label htmlFor="rememberMe" className="flex items-center">
                <input type="checkbox" id="rememberMe" className="mr-2" />
                Remember Me
              </label>
              <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
            </div>

            {error && <p className='text-red-500 text-center'>{error}</p>}

            {/* Login Button */}
            <button
              type='submit'
              className="block w-full text-center py-2 px-4 rounded-full text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 transition"
            >
              Login
            </button>

            {/* Register Link */}
            <p className="text-sm text-center text-gray-500 mt-4">
              Don’t have an account? <Link to="/auth/register" className="text-blue-500 hover:underline">Register</Link>
            </p>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
