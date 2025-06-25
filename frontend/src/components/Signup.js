import { useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../api';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/signup', { ...form, role: 'user' });
      alert('Signup successful. Now login.');
    } catch (err) {
      alert('Signup failed');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Sign Up</h2>
        <input className="w-full border px-4 py-2 mb-4 rounded" placeholder="Name" required onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className="w-full border px-4 py-2 mb-4 rounded" placeholder="Email"  required onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" className="w-full border px-4 py-2 mb-4 rounded" placeholder="Password" required onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600" type="submit">Sign Up</button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <Link to="/login" className="text-green-500 hover:underline">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
