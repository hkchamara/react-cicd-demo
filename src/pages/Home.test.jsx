import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CartProvider } from "../context/CartContext";
import Home from "./Home";

describe("Home page", () => {
  it("renders the ShoeStore hero", () => {
    render(
      <MemoryRouter>
        <CartProvider>
          <Home />
        </CartProvider>
      </MemoryRouter>
    );

    expect(screen.getByText("Step Into Your Style.")).toBeTruthy();
    expect(screen.getByText("Featured Shoes")).toBeTruthy();
  });
});