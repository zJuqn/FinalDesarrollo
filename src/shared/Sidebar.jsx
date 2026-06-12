import { Link, useLocation } from 'react-router-dom';
import { Package, Users } from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <Link 
        to="/productos" 
        className={`sidebar-item ${location.pathname.startsWith('/producto') ? 'active' : ''}`}
        onClick={() => setIsOpen && setIsOpen(false)}
      >
        <Package size={20} />
        Product
      </Link>
      <Link 
        to="/usuarios" 
        className={`sidebar-item ${location.pathname.startsWith('/usuario') ? 'active' : ''}`}
        onClick={() => setIsOpen && setIsOpen(false)}
      >
        <Users size={20} />
        Users
      </Link>
    </aside>
  );
};

export default Sidebar;
