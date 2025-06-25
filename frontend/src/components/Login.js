import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../api';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.user.role);
      alert('Login successful');
      navigate('/');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Login</h2>
        <input className="w-full border px-4 py-2 mb-4 rounded" placeholder="Email" required onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" className="w-full border px-4 py-2 mb-4 rounded" placeholder="Password" required onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" type="submit">Log In</button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
