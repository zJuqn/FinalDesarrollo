import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../service/productService';
import ProductGallery from '../components/ProductGallery';
import ProductInfo from '../components/ProductInfo';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-top-section">
        <ProductGallery images={product.images} title={product.title} />
        <ProductInfo product={product} />
      </div>
      
      <div className="product-description-section">
        <h2 className="description-title">Descripción</h2>
        <p className="description-text">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
