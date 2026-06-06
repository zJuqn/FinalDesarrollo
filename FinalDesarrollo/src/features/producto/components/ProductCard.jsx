import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.images[0]} alt={product.title} className="product-image" />
      <div className="product-info">
        <Link to={`/producto/${product.id}`} className="product-title">
          {product.title}
        </Link>
        <div className="product-desc">
          {product.description}
        </div>
        <div className="product-price">
          ${product.price}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
