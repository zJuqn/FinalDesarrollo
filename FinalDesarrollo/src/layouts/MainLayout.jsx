import { Outlet } from 'react-router-dom';
import Header from '../shared/Header';
import Sidebar from '../shared/Sidebar';

const MainLayout = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-container">
        <Sidebar />
        <main className="content-area">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
