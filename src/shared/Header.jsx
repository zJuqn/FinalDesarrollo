import { Menu } from 'lucide-react';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <button className="menu-button" onClick={toggleSidebar}>
        <Menu size={24} />
      </button>
      <span className="header-title">0192643 - Juan Coronel  / 0192570 Luis Verjel</span>
    </header>
  );
};

export default Header;
