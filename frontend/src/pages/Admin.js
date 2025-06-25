import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      navigate('/admin-dashboard'); // This should match your actual dashboard route
    } else {
      alert('Access denied. You are not an admin.');
      navigate('/');
    }
  }, []);

  return null;
};

export default Admin;
