import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import book from '../assest/Logo.png';
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth(); // Access the login function from context

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const result = await response.json();
        const { category } = result; // Extract the category from the response
        
        login(); // Call the login function to update context
        
        // Navigate based on the category
        if (category === 'admin') {
          navigate('/admindashboard'); // Redirect to the admin dashboard
        } else {
          navigate('/home'); // Redirect to the homepage
        }

        console.log(result.message);
      } else {
        const result = await response.json();
        console.log(result.message);
        setError('Incorrect email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <section className="h-full flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center xl:mt-10 gap-60 xl:mb-10 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img src={book} alt="Sample" className="w-full" />
      </div>
      <div className="md:w-1/3 max-w-sm py-5">
        <div className="text-center md:text-left">
          <label className="mr-1 text-blue-950 text-3xl">Sign in with</label>
        </div>
        <form className="space-y-4 mb-3" onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 hover:border-blue-950 hover:border-2 rounded"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 hover:border-blue-950 hover:border-2 rounded"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-600">{error}</p>}
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <Link
              className="text-blue-950 hover:text-blue-700 hover:underline hover:underline-offset-4"
              to="/forget"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-950 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{' '}
          <Link
            className="text-red-600 hover:underline hover:underline-offset-4"
            to="/registerform"
          >
            Register
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
