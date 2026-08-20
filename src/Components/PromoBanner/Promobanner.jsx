import React from "react";
import "./PromoBanner.css";

const AVATARS = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/65.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
];

export default function PromoBanner({
  badge = "New Collection",
  title = "Ready to Elevate Your Style?",
  description = "Don't miss out on the latest trends and exclusive collections. Your perfect wardrobe awaits.",
  primaryCta = "Shop the Collection",
  secondaryCta = "Explore Deals",
  rating = "5/5",
  customerCount = "1200 customers",
  avatars = AVATARS,
  onPrimaryClick,
  onSecondaryClick,
}) {
  return (
    <section className="promo-banner">
      <span className="promo-banner__badge">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="4" fill="currentColor" />
          <path
            d="M7 12l3 3 7-7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {badge}
      </span>

      <div className="promo-banner__content">
        <div className="promo-banner__text">
          <h2 className="promo-banner__title">{title}</h2>
          <p className="promo-banner__description">{description}</p>
        </div>

        <div className="promo-banner__actions">
          <div className="promo-banner__buttons">
            <button
              type="button"
              className="promo-banner__btn promo-banner__btn--primary"
              onClick={onPrimaryClick}
            >
              {primaryCta} <span aria-hidden="true">→</span>
            </button>
            <button
              type="button"
              className="promo-banner__btn promo-banner__btn--secondary"
              onClick={onSecondaryClick}
            >
              {secondaryCta}
            </button>
          </div>

          <div className="promo-banner__social-proof">
            <div className="promo-banner__avatars">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="promo-banner__avatar"
                />
              ))}
            </div>
            <span className="promo-banner__rating">
              {rating} ({customerCount})
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}