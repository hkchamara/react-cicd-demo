import { describe, expect, it, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { CartProvider, useCart } from "./CartContext";
import { products } from "../data/products";

describe("CartContext", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("adds a product and calculates totals", () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider
    });

    act(() => {
      result.current.addToCart(products[0], 9);
    });

    expect(result.current.totalItems).toBe(1);
    expect(result.current.cart[0].name).toBe("Aero Run X1");
    expect(result.current.cart[0].size).toBe(9);
    expect(result.current.subtotal).toBe(89.99);
  });

  it("removes a product from the cart", () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider
    });

    act(() => {
      result.current.addToCart(products[0], 9);
      result.current.removeFromCart(products[0].id, 9);
    });

    expect(result.current.totalItems).toBe(0);
    expect(result.current.cart).toHaveLength(0);
  });
});