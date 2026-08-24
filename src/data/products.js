export const categories = ["All", "Running", "Casual", "Sports", "Formal"];

export const sizes = [7, 8, 9, 10, 11];

export const products = [
  {
    id: 1,
    name: "Aero Run X1",
    category: "Running",
    price: 89.99,
    rating: 4.8,
    stock: 12,
    sizes: [7, 8, 9, 10, 11],
    badge: "Best Seller",
    color: "Black / Red",
    description: "Lightweight running shoes with responsive cushioning for everyday training and road runs.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    name: "Street Flex",
    category: "Casual",
    price: 74.99,
    rating: 4.5,
    stock: 20,
    sizes: [7, 8, 9, 10],
    badge: "New",
    color: "White / Grey",
    description: "Clean everyday sneakers designed for comfortable city walks and casual outfits.",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    name: "Court Pro",
    category: "Sports",
    price: 109.99,
    rating: 4.7,
    stock: 9,
    sizes: [8, 9, 10, 11],
    badge: "Popular",
    color: "White / Blue",
    description: "Stable sports footwear with a supportive upper and durable outsole for active sessions.",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    name: "Classic Oxford",
    category: "Formal",
    price: 129.99,
    rating: 4.6,
    stock: 7,
    sizes: [7, 8, 9, 10, 11],
    badge: "Premium",
    color: "Brown",
    description: "A polished formal shoe with a timeless silhouette for office and special occasions.",
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 5,
    name: "Urban Runner",
    category: "Running",
    price: 94.99,
    rating: 4.4,
    stock: 15,
    sizes: [7, 8, 9, 10],
    badge: "",
    color: "Grey / Orange",
    description: "Versatile performance shoes that combine running comfort with a modern street look.",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 6,
    name: "Daily Canvas",
    category: "Casual",
    price: 59.99,
    rating: 4.2,
    stock: 25,
    sizes: [7, 8, 9, 10, 11],
    badge: "Value",
    color: "Cream",
    description: "Simple canvas sneakers made for comfortable daily wear and relaxed weekends.",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 7,
    name: "Sprint Elite",
    category: "Sports",
    price: 139.99,
    rating: 4.9,
    stock: 6,
    sizes: [8, 9, 10, 11],
    badge: "Elite",
    color: "Black / Lime",
    description: "High-performance sports shoes with lightweight construction and a secure fit.",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 8,
    name: "Executive Leather",
    category: "Formal",
    price: 149.99,
    rating: 4.8,
    stock: 5,
    sizes: [7, 8, 9, 10],
    badge: "Premium",
    color: "Black",
    description: "Elegant leather footwear designed for professional occasions and formal events.",
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=900&q=80"
  }
];

export function getProductById(id) {
  return products.find((product) => product.id === Number(id));
}