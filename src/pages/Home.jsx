import { Link } from "react-router-dom";
import { categories, products } from "../data/products";
import ProductGrid from "../components/ProductGrid";

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="eyebrow">NEW SEASON 2026</span>
            <h1>Step Into Your Style.</h1>
            <p>
              Discover comfortable, modern shoes designed for running,
              everyday life, sport and special occasions.
            </p>
            <div className="hero-actions">
              <Link className="primary-button" to="/products">
                Shop Shoes
              </Link>
              <Link className="secondary-button" to="/products?category=Running">
                Explore Running
              </Link>
            </div>
          </div>

          <div className="hero-shoe">
            <div className="hero-circle">👟</div>
            <div className="hero-price">From <strong>$59.99</strong></div>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SHOP BY STYLE</span>
            <h2>Find Your Perfect Pair</h2>
          </div>
          <Link to="/products">View all →</Link>
        </div>

        <div className="category-grid">
          {categories.slice(1).map((category) => (
            <Link
              key={category}
              to={`/products?category=${encodeURIComponent(category)}`}
              className="category-card"
            >
              <span className="category-icon">
                {category === "Running" ? "🏃" :
                 category === "Casual" ? "✨" :
                 category === "Sports" ? "🏆" : "👞"}
              </span>
              <span>{category}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">CUSTOMER FAVORITES</span>
            <h2>Featured Shoes</h2>
          </div>
          <Link to="/products">Shop all →</Link>
        </div>

        <ProductGrid products={featured} />
      </section>

      <section className="promo-section">
        <div className="container promo-content">
          <div>
            <span className="eyebrow">SIMPLE. FAST. COMFORTABLE.</span>
            <h2>Free shipping on orders over $150.</h2>
            <p>Build your perfect collection and save on delivery.</p>
          </div>
          <Link className="primary-button light-button" to="/products">
            Start Shopping
          </Link>
        </div>
      </section>
    </>
  );
}