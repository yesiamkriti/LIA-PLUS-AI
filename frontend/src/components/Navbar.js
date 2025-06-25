import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [role, setRole] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    setRole(localStorage.getItem('role'));
    setToken(localStorage.getItem('token'));
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">Blog RBAC</Link>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            ☰
          </button>
        </div>

        <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row gap-4 md:ml-6 mt-4 md:mt-0">
            {token && (
              <>
                <li><Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
                <li><Link to="/posts" className="text-gray-700 hover:text-blue-600">Posts</Link></li>
                {role === 'admin' && (
                  <li><Link to="/admin" className="text-gray-700 hover:text-green-600">Admin</Link></li>
                )}
                <li>
                  <button
                    onClick={logout}
                    className="text-red-500 hover:text-red-700 font-semibold"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
