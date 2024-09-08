import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setErrorMessage('Email and password are required.');
    } else {
      setErrorMessage('');
      console.log('Logged In:', { email, password });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container bg-white rounded-2xl shadow-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center mb-6">LogIn</h2>

        <div className="form-group mb-4">
          <label className="block mb-1 text-gray-700">Email</label>
          <input
            type="email"
            className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group mb-4">
          <label className="block mb-1 text-gray-700">Password</label>
          <input
            type="password"
            className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {errorMessage && (
          <p className="validation-message text-red-500 text-sm mb-4">{errorMessage}</p>
        )}

        <button
          onClick={handleLogin}
          className="btn w-full py-2 bg-blue-400 text-white font-semibold rounded-lg hover:bg-blue-500"
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login
