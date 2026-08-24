import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, subtotal, shipping, total, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <section className="container section empty-cart">
        <div className="empty-icon">🛒</div>
        <h1>Your cart is empty</h1>
        <p>Add a pair of shoes and come back here to checkout.</p>
        <Link className="primary-button" to="/products">Browse Shoes</Link>
      </section>
    );
  }

  return (
    <section className="container section">
      <div className="page-heading">
        <span className="eyebrow">YOUR ORDER</span>
        <h1>Shopping Cart</h1>
        <p>{totalItems} item(s) in your cart.</p>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <CartItem key={`${item.productId}-${item.size}`} item={item} />
          ))}
        </div>

        <aside className="order-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <strong>${subtotal.toFixed(2)}</strong>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <strong>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</strong>
          </div>

          <div className="summary-divider" />

          <div className="summary-row total-row">
            <span>Total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>

          <Link className="primary-button full-button" to="/checkout">
            Proceed to Checkout
          </Link>

          <Link className="continue-link" to="/products">
            Continue Shopping
          </Link>
        </aside>
      </div>
    </section>
  );
}