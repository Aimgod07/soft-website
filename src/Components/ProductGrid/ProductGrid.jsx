import React from "react";
import "./ProductGrid.css";
const products = [
  {
    id: 1,
    name: "Classic Blue Jeans",
    category: "Jeans",
    price: "₹1,999",
    image: "/images/jeans.avif",
    badge: "POPULAR",
  },
  {
    id: 2,
    name: "Oversized T-Shirt",
    category: "T-Shirts",
    price: "₹899",
    image: "/images/tshirt.avif",
    badge: "NEW",
  },
  {
    id: 3,
    name: "Premium Hoodie",
    category: "Hoodies",
    price: "₹2,499",
    image: "/images/sweatshirt.avif",
    badge: "TRENDING",
  },
  {
    id: 4,
    name: "Casual Shirt",
    category: "Shirts",
    price: "₹1,599",
    image: "/images/shirt.avif",
    badge: "NEW",
  },
  {
    id: 5,
    name: "Cargo Pants",
    category: "Pants",
    price: "₹2,199",
    image: "/images/cargo.avif",
    badge: "POPULAR",
  },
  {
    id: 6,
    name: "Winter Sweatshirt",
    category: "Sweatshirts",
    price: "₹1,899",
    image: "/images/sweatshirt.avif",
    badge: "NEW",
  },
  {
    id: 7,
    name: "Relaxed Fit Jeans",
    category: "Jeans",
    price: "₹2,299",
    image: "/images/relaxed-jeans.avif",
    badge: "TRENDING",
  },
  {
    id: 8,
    name: "Basic Cotton Tee",
    category: "T-Shirts",
    price: "₹699",
    image: "/images/basic-tee.avif",
    badge: "POPULAR",
  },
];
export default function ProductGrid() {
  return (
    <section className="product-grid-section">
      {" "}
      <div className="product-grid-container">
        {" "}
        {/* HEADER */}{" "}
        <div className="product-grid-header">
          {" "}
          <div>
            {" "}
            <span className="product-grid-eyebrow"> OUR COLLECTION </span>{" "}
            <h2>New Collection</h2>{" "}
            <p>
              {" "}
              Discover everyday essentials and timeless pieces{" "}
              <br className="desktop-break" /> designed for your style.{" "}
            </p>{" "}
          </div>{" "}
          <button className="see-all-button">
            {" "}
            See More Collection <span>→</span>{" "}
          </button>{" "}
        </div>{" "}
        {/* GRID */}{" "}
        <div className="product-grid">
          {" "}
          {products.map((product) => (
            <article className="product-grid-card" key={product.id}>
              {" "}
              {/* IMAGE */}{" "}
              <div className="product-grid-image">
                {" "}
                {product.badge && (
                  <span className="product-grid-badge"> {product.badge} </span>
                )}{" "}
                <button
                  className="product-heart"
                  aria-label={`Add ${product.name} to wishlist`}
                >
                  {" "}
                  ♡{" "}
                </button>{" "}
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />{" "}
                {/* Hover action */}{" "}
                <button className="quick-add"> Add to cart </button>{" "}
              </div>{" "}
              {/* DETAILS */}{" "}
              <div className="product-grid-details">
                {" "}
                <div>
                  {" "}
                  <span className="product-category">
                    {" "}
                    {product.category}{" "}
                  </span>{" "}
                  <h3>{product.name}</h3>{" "}
                </div>{" "}
                <div className="product-grid-price-row">
                  {" "}
                  <span className="product-grid-price">
                    {" "}
                    {product.price}{" "}
                  </span>{" "}
                  <button
                    className="product-grid-cart"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    {" "}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >
                      {" "}
                      <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6" />{" "}
                      <circle cx="10" cy="20" r="1" />{" "}
                      <circle cx="18" cy="20" r="1" />{" "}
                    </svg>{" "}
                  </button>{" "}
                </div>{" "}
              </div>{" "}
            </article>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
