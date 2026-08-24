import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { getProductById } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addToCart } = useCart();
  const [size, setSize] = useState(product?.sizes[0]);

  if (!product) {
    return (
      <section className="container section empty-results">
        <h1>Product not found</h1>
        <Link className="primary-button" to="/products">Back to Products</Link>
      </section>
    );
  }

  function handleAddToCart() {
    addToCart(product, size);
    navigate("/cart");
  }

  return (
    <section className="container section product-details">
      <Link className="back-link" to="/products">← Back to products</Link>

      <div className="details-grid">
        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-info">
          <span className="eyebrow">{product.category}</span>
          <h1>{product.name}</h1>

          <div className="details-rating">
            <span>★★★★★</span> {product.rating} / 5
          </div>

          <div className="details-price">${product.price.toFixed(2)}</div>

          <p className="details-description">{product.description}</p>

          <div className="detail-meta">
            <span>Color: <strong>{product.color}</strong></span>
            <span>Stock: <strong>{product.stock} available</strong></span>
          </div>

          <div className="size-selector">
            <h3>Select Size</h3>
            <div className="size-buttons">
              {product.sizes.map((item) => (
                <button
                  type="button"
                  key={item}
                  className={size === item ? "size-button selected" : "size-button"}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button className="primary-button full-button" type="button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}