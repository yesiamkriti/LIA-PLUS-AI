import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const { token, role, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
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

                <li className="relative">
                  <button
                    onClick={() => setDropdown(!dropdown)}
                    className="text-gray-700 hover:text-indigo-600"
                  >
                    Profile ▼
                  </button>
                  {dropdown && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
                      <p className="px-4 py-2 text-sm text-gray-800 capitalize border-b">
                        Role: {role}
                      </p>
                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-2 text-left text-red-500 hover:bg-red-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
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
