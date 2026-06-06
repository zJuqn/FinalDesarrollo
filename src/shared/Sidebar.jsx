import { Link, useLocation } from 'react-router-dom';
import { Package, Users } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <Link 
        to="/productos" 
        className={`sidebar-item ${location.pathname.startsWith('/producto') ? 'active' : ''}`}
      >
        <Package size={20} />
        Product
      </Link>
      <Link 
        to="/usuarios" 
        className={`sidebar-item ${location.pathname.startsWith('/usuario') ? 'active' : ''}`}
      >
        <Users size={20} />
        Users
      </Link>
    </aside>
  );
};

export default Sidebar;
