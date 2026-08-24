import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { categories, products, sizes } from "../data/products";
import ProductGrid from "../components/ProductGrid";

export default function Products() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [size, setSize] = useState("All");
  const [price, setPrice] = useState("All");
  const [sort, setSort] = useState("featured");

  useEffect(() => {
    setCategory(searchParams.get("category") || "All");
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search.trim()) {
      const term = search.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(term) ||
          product.category.toLowerCase().includes(term)
      );
    }

    if (category !== "All") {
      result = result.filter((product) => product.category === category);
    }

    if (size !== "All") {
      result = result.filter((product) => product.sizes.includes(Number(size)));
    }

    if (price === "under50") {
      result = result.filter((product) => product.price < 50);
    } else if (price === "50to100") {
      result = result.filter((product) => product.price >= 50 && product.price <= 100);
    } else if (price === "100to150") {
      result = result.filter((product) => product.price > 100 && product.price <= 150);
    }

    if (sort === "priceLow") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "priceHigh") {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sort === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [search, category, size, price, sort]);

  function resetFilters() {
    setSearch("");
    setCategory("All");
    setSize("All");
    setPrice("All");
    setSort("featured");
  }

  return (
    <section className="container section products-page">
      <div className="page-heading">
        <span className="eyebrow">OUR COLLECTION</span>
        <h1>Shop Shoes</h1>
        <p>Find the right pair for your lifestyle.</p>
      </div>

      <div className="shop-layout">
        <aside className="filters">
          <div className="filter-header">
            <h3>Filters</h3>
            <button type="button" onClick={resetFilters}>Reset</button>
          </div>

          <label className="filter-label">
            Search
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search shoes..."
              type="search"
            />
          </label>

          <div className="filter-group">
            <h4>Category</h4>
            {categories.map((item) => (
              <label key={item} className="radio-row">
                <input
                  type="radio"
                  name="category"
                  checked={category === item}
                  onChange={() => setCategory(item)}
                />
                {item}
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h4>Size</h4>
            <select value={size} onChange={(event) => setSize(event.target.value)}>
              <option value="All">All sizes</option>
              {sizes.map((item) => (
                <option key={item} value={item}>US {item}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <h4>Price</h4>
            <select value={price} onChange={(event) => setPrice(event.target.value)}>
              <option value="All">All prices</option>
              <option value="under50">Under $50</option>
              <option value="50to100">$50 - $100</option>
              <option value="100to150">$100 - $150</option>
            </select>
          </div>
        </aside>

        <div className="products-results">
          <div className="results-toolbar">
            <span>{filteredProducts.length} products found</span>

            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              <option value="featured">Featured</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </section>
  );
}