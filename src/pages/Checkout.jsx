import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, subtotal, shipping, total, clearCart } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: ""
  });

  const [error, setError] = useState("");

  if (cart.length === 0) {
    return (
      <section className="container section empty-cart">
        <h1>Your cart is empty</h1>
        <Link className="primary-button" to="/products">Shop Now</Link>
      </section>
    );
  }

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const missing = Object.values(form).some((value) => !value.trim());

    if (missing) {
      setError("Please complete all customer information.");
      return;
    }

    const orderNumber = `ORD-${Date.now().toString().slice(-6)}`;

    clearCart();

    navigate("/order-success", {
      state: {
        orderNumber,
        total,
        customerName: form.name
      }
    });
  }

  return (
    <section className="container section">
      <div className="page-heading">
        <span className="eyebrow">FINAL STEP</span>
        <h1>Checkout</h1>
        <p>Complete your details to place this demo order.</p>
      </div>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Customer Information</h2>

          {error && <div className="form-error">{error}</div>}

          <div className="form-grid">
            <label>
              Full Name
              <input name="name" value={form.name} onChange={handleChange} />
            </label>

            <label>
              Email
              <input name="email" type="email" value={form.email} onChange={handleChange} />
            </label>

            <label>
              Phone
              <input name="phone" value={form.phone} onChange={handleChange} />
            </label>

            <label>
              City
              <input name="city" value={form.city} onChange={handleChange} />
            </label>

            <label className="full-field">
              Address
              <textarea name="address" rows="3" value={form.address} onChange={handleChange} />
            </label>

            <label>
              Postal Code
              <input name="postalCode" value={form.postalCode} onChange={handleChange} />
            </label>
          </div>

          <div className="payment-demo">
            <h3>Payment Method</h3>
            <label className="radio-row">
              <input type="radio" checked readOnly />
              Cash on Delivery
            </label>
            <p>This is a demo store. No real payment is processed.</p>
          </div>

          <button className="primary-button full-button" type="submit">
            Place Demo Order
          </button>
        </form>

        <aside className="order-summary">
          <h2>Your Order</h2>

          {cart.map((item) => (
            <div className="checkout-item" key={`${item.productId}-${item.size}`}>
              <span>
                {item.name} × {item.quantity}
                <small>Size {item.size}</small>
              </span>
              <strong>${(item.price * item.quantity).toFixed(2)}</strong>
            </div>
          ))}

          <div className="summary-divider" />

          <div className="summary-row">
            <span>Subtotal</span>
            <strong>${subtotal.toFixed(2)}</strong>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <strong>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</strong>
          </div>

          <div className="summary-row total-row">
            <span>Total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}