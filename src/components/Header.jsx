import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" to="/">
          <span className="brand-icon">S</span>
          <span>ShoeStore</span>
        </Link>

        <nav className="main-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/products">Products</NavLink>
        </nav>

        <Link className="cart-link" to="/cart" aria-label="Shopping cart">
          <span className="cart-icon">🛒</span>
          <span>Cart</span>
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
      </div>
    </header>
  );
}