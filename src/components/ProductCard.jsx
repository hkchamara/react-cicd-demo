import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-image-wrap">
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <img src={product.image} alt={product.name} className="product-image" />
      </Link>

      <div className="product-card-body">
        <div className="product-category">{product.category}</div>
        <Link to={`/products/${product.id}`} className="product-name">
          {product.name}
        </Link>

        <div className="rating">
          <span>★</span> {product.rating}
        </div>

        <div className="product-card-footer">
          <strong>${product.price.toFixed(2)}</strong>
          <button
            className="small-button"
            onClick={() => addToCart(product)}
            type="button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}