import { Link, useLocation } from "react-router-dom";

export default function OrderSuccess() {
  const { state } = useLocation();

  const orderNumber = state?.orderNumber || "ORD-DEMO";
  const total = state?.total || 0;
  const customerName = state?.customerName || "Customer";

  return (
    <section className="container section success-page">
      <div className="success-card">
        <div className="success-icon">✓</div>
        <span className="eyebrow">ORDER CONFIRMED</span>
        <h1>Thank you, {customerName}!</h1>
        <p>Your demo order has been placed successfully.</p>

        <div className="success-details">
          <div>
            <span>Order Number</span>
            <strong>#{orderNumber}</strong>
          </div>
          <div>
            <span>Total</span>
            <strong>${Number(total).toFixed(2)}</strong>
          </div>
        </div>

        <Link className="primary-button" to="/products">
          Continue Shopping
        </Link>
      </div>
    </section>
  );
}