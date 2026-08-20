import  { useRef } from "react";
import "./ClothingCarousel.css";

const products = [
  {
    id: 1,
    name: "Classic Blue Jeans",
    description: "Comfortable everyday denim",
    price: "₹1,999",
    badge: "POPULAR",
    image: "/images/jeans.avif",
  },
  {
    id: 2,
    name: "Oversized T-Shirt",
    description: "Soft premium cotton",
    price: "₹899",
    badge: "NEW",
    image: "/images/tshirt.avif",
  },
  {
    id: 3,
    name: "Premium Hoodie",
    description: "Warm & comfortable",
    price: "₹2,499",
    badge: "TRENDING",
    image: "/images/hoodie.avif",
  },
  {
    id: 4,
    name: "Casual Shirt",
    description: "Perfect everyday outfit",
    price: "₹1,599",
    badge: "NEW",
    image: "/images/shirt.avif",
  },
  {
    id: 5,
    name: "Cargo Pants",
    description: "Relaxed fit utility pants",
    price: "₹2,199",
    badge: "POPULAR",
    image: "/images/cargo.avif",
  },
  {
    id: 6,
    name: "Winter Sweatshirt",
    description: "Soft fleece interior",
    price: "₹1,899",
    badge: "NEW",
    image: "/images/sweatshirt.avif",
  },
  {
    id: 7,
    name: "Relaxed Fit Jeans",
    description: "Modern relaxed silhouette",
    price: "₹2,299",
    badge: "TRENDING",
    image: "/images/relaxed-jeans.avif",
  },
  {
    id: 8,
    name: "Basic Cotton Tee",
    description: "Minimal everyday essential",
    price: "₹699",
    badge: "POPULAR",
    image: "/images/basic-tee.avif",
  },
];

export default function ClothingCarousel() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({
      left: -330,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({
      left: 330,
      behavior: "smooth",
    });
  };

  return (
    <section className="clothing-section">
      {/* HEADER */}
      <div className="clothing-header">
        <div>
          <h2>Popular Styles</h2>

          <p>
            Discover our most loved clothing pieces for
            <br />
            every occasion.
          </p>
        </div>

        <div className="carousel-arrows">
          <button
            className="carousel-arrow carousel-arrow-light"
            onClick={scrollLeft}
            aria-label="Previous products"
          >
            ←
          </button>

          <button
            className="carousel-arrow carousel-arrow-dark"
            onClick={scrollRight}
            aria-label="Next products"
          >
            →
          </button>
        </div>
      </div>

      {/* PRODUCTS */}
      <div
        ref={carouselRef}
        className="clothing-carousel"
      >
        {products.map((product) => (
          <article
            className="clothing-card"
            key={product.id}
          >
            {/* IMAGE */}
            <div className="clothing-image-container">
              <span className="clothing-badge">
                {product.badge}
              </span>

              <button
                className="wishlist-button"
                aria-label={`Add ${product.name} to wishlist`}
              >
                ♡
              </button>

              <img
                src={product.image}
                alt={product.name}
                className="clothing-image"
              />
            </div>

            {/* INFO */}
            <div className="clothing-info">
              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <div className="clothing-bottom">
                <span className="clothing-price">
                  {product.price}
                </span>

                <button
                  className="cart-button"
                  aria-label={`Add ${product.name} to cart`}
                >
                  🛒
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}