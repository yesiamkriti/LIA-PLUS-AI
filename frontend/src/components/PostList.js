import { useEffect, useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      const res = await API.get('/posts');
      setPosts(res.data);
    } catch (err) {
      alert('Please login first.');
      navigate('/login');
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Blog Posts</h1>
      <div className="grid gap-6 max-w-4xl mx-auto">
        {posts.map((post) => (
          <div key={post._id} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
            <p className="text-gray-700 my-2">{post.content}</p>
            <p className="text-sm text-gray-500">By {post.author?.name || "Unknown"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
