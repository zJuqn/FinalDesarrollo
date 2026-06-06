import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ProductsPage from '../features/producto/pages/ProductsPage';
import ProductDetailPage from '../features/producto/pages/ProductDetailPage';
import UsersPage from '../features/usuarios/pages/UsersPage';

const AppRouter = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/productos" replace />} />
          <Route path="productos" element={<ProductsPage />} />
          <Route path="producto/:id" element={<ProductDetailPage />} />
          <Route path="usuarios" element={<UsersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
