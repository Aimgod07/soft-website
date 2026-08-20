import React from "react";
import "./CategorySection.css";

const CATEGORIES = [
  {
    name: "Jeans & Denim",
    color: "#4C7EE0",
    image:
      "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&w=1260&h=750&dpr=1",
  },
  {
    name: "T-Shirts & Casuals",
    color: "#F0994B",
    image:
      "https://images.pexels.com/photos/4440567/pexels-photo-4440567.jpeg?auto=compress&w=1260&h=750&dpr=1",
  },
  {
    name: "Hoodies & Sweatshirts",
    color: "#4FAE8A",
    image:
      "https://images.pexels.com/photos/9594679/pexels-photo-9594679.jpeg?auto=compress&w=1260&h=750&dpr=1",
  },
  {
    name: "Dresses & Tops",
    color: "#E17A9B",
    image:
      "https://images.pexels.com/photos/4352249/pexels-photo-4352249.jpeg?auto=compress&w=1260&h=750&dpr=1",
  },
  {
    name: "Occasion Wear",
    color: "#7B5FC7",
    image:
      "https://images.pexels.com/photos/15595670/pexels-photo-15595670/free-photo-of-woman-walking-in-a-tight-dress.jpeg?auto=compress&w=1260&h=750&dpr=1",
  },
];

export default function CategorySection({
  heading = "Shop By Category",
  viewAllLabel = "View All",
  categories = CATEGORIES,
  onViewAllClick,
  onCategoryClick,
}) {
  return (
    <section className="category-section">
      <div className="category-section__header">
        <h2 className="category-section__heading">{heading}</h2>
        <button
          type="button"
          className="category-section__view-all"
          onClick={onViewAllClick}
        >
          {viewAllLabel}
        </button>
      </div>

      <div className="category-section__list">
        {categories.map((cat) => (
          <button
            key={cat.name}
            type="button"
            className="category-card"
            style={{ backgroundColor: cat.color }}
            onClick={() => onCategoryClick?.(cat.name)}
          >
            <span className="category-card__name">{cat.name}</span>
            <span className="category-card__image-wrap">
              <img
                src={cat.image}
                alt={cat.name}
                className="category-card__image"
              />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}