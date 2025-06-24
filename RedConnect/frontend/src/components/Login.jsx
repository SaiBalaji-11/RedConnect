import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import axios from 'axios';
const api = import.meta.env.VITE_API_URL;

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // <-- loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    setLoading(true); // Start spinner
    setError('');
    try {
      const res = await axios.post(`${api}/login`, formData);
      if (res.status === 200) {
        login();
        navigate('/');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials');
    } finally {
      setLoading(false); // Stop spinner (if there's an error)
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-red-600 cursor-pointer">Login</h2>

        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          type="text"
          placeholder="Username"
          className="border p-2 w-full mb-4 rounded"
        />
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4 rounded"
        />

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <button
          onClick={handleLogin}
          disabled={loading}
          className={`bg-red-600 text-white px-4 py-2 w-full rounded hover:bg-red-700 transition flex justify-center items-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 000 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
              />
            </svg>
          ) : (
            'Login'
          )}
        </button>
      </div>
    </div>
  );
};

export default Login;
