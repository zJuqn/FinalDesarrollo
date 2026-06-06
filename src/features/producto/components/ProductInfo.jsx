const ProductInfo = ({ product }) => {
  return (
    <div className="info-section">
      <div className="condition">Nuevo</div>
      <h1 className="detail-title">{product.title}</h1>
      <div className="category-tag">{product.category.name}</div>
      <div className="detail-price">${product.price}</div>
      <div className="shipping">Envio gratis</div>
      
      <button className="buy-btn">COMPRAR AHORA</button>
      <button className="cart-btn">AGREGAR AL CARRITO</button>
    </div>
  );
};

export default ProductInfo;
