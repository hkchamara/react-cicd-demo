import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "shoestore-cart";

function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(loadCart);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  function addToCart(product, size = product.sizes[0]) {
    setCart((current) => {
      const existing = current.find(
        (item) => item.productId === product.id && item.size === size
      );

      if (existing) {
        return current.map((item) =>
          item.productId === product.id && item.size === size
            ? { ...item, quantity: Math.min(item.quantity + 1, product.stock) }
            : item
        );
      }

      return [
        ...current,
        {
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          size,
          quantity: 1
        }
      ];
    });
  }

  function removeFromCart(productId, size) {
    setCart((current) =>
      current.filter(
        (item) => !(item.productId === productId && item.size === size)
      )
    );
  }

  function updateQuantity(productId, size, quantity) {
    if (quantity <= 0) {
      removeFromCart(productId, size);
      return;
    }

    setCart((current) =>
      current.map((item) =>
        item.productId === productId && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  }

  function clearCart() {
    setCart([]);
  }

  const totalItems = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  const shipping = subtotal === 0 || subtotal >= 150 ? 0 : 10;
  const total = subtotal + shipping;

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    subtotal,
    shipping,
    total
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}