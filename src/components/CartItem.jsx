import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />

      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <p>Size: {item.size}</p>
        <strong>${item.price.toFixed(2)}</strong>
      </div>

      <div className="quantity-control">
        <button
          type="button"
          aria-label={`Decrease quantity of ${item.name}`}
          onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
        >
          −
        </button>
        <span>{item.quantity}</span>
        <button
          type="button"
          aria-label={`Increase quantity of ${item.name}`}
          onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
        >
          +
        </button>
      </div>

      <strong className="cart-line-total">
        ${(item.price * item.quantity).toFixed(2)}
      </strong>

      <button
        className="remove-button"
        type="button"
        onClick={() => removeFromCart(item.productId, item.size)}
      >
        Remove
      </button>
    </div>
  );
}