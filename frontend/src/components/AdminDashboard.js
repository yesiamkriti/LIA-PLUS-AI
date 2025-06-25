import { useEffect, useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ title: '', content: '' });
  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      const res = await API.get('/posts');
      setPosts(res.data);
    } catch (err) {
      alert('Unauthorized');
      navigate('/');
    }
  };

  const createPost = async (e) => {
    e.preventDefault();
    try {
      await API.post('/posts', form);
      setForm({ title: '', content: '' });
      fetchPosts();
    } catch (err) {
      alert('Only admins can create posts');
    }
  };

  const deletePost = async (id) => {
    try {
      await API.delete(`/posts/${id}`);
      fetchPosts();
    } catch (err) {
      alert('Delete failed');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('role') !== 'admin') {
      alert('Access denied. Admins only.');
      navigate('/');
    } else {
      fetchPosts();
    }
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Admin Dashboard</h2>
        <form onSubmit={createPost} className="bg-white shadow p-6 rounded mb-8">
          <input className="w-full mb-4 border px-4 py-2 rounded" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
          <textarea className="w-full mb-4 border px-4 py-2 rounded" placeholder="Content" value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} />
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700" type="submit">Create Post</button>
        </form>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">All Posts</h3>
        {posts.map(post => (
          <div key={post._id} className="bg-white shadow rounded p-4 mb-4">
            <h4 className="text-lg font-bold">{post.title}</h4>
            <p className="text-gray-700">{post.content}</p>
            <button onClick={() => deletePost(post._id)} className="text-red-500 mt-2 hover:underline">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
