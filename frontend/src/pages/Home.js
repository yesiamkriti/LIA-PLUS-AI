import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, []);

  const role = localStorage.getItem('role');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to the Blog Platform</h1>
      <p className="text-lg text-gray-700 mb-6">You are logged in as <b>{role}</b></p>
      
      <div className="flex space-x-4">
        <Link to="/posts" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          View Posts
        </Link>
        {role === 'admin' && (
          <Link to="/admin" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Admin Dashboard
          </Link>
        )}
        <button
          onClick={() => {
            localStorage.clear();
            navigate('/login');
          }}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
