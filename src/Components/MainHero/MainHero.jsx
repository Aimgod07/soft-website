import React from "react";
import "./MainHero.css";

const DEFAULT_HERO_IMAGE = "/images/herogirl.png";
const DEFAULT_SIDE_IMAGE = "/images/texture.png";

export default function Hero({
  heroImage = DEFAULT_HERO_IMAGE,
  sideImage = DEFAULT_SIDE_IMAGE,
  title = (
    <>
      Your Choice
      <br />
      Our Quality
    </>
  ),
  description = (
    <>
      Daily casual t-shirts, jeans,
      <br />
      outfits etc. Premium Quality
    </>
  ),
  buttonText = "Get started",
  onButtonClick,
}) {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* LEFT CONTENT */}
        <div className="hero-copy">
          <h1>{title}</h1>

          <p>{description}</p>

          <button
            type="button"
            className="hero-button"
            onClick={onButtonClick}
          >
            <span>{buttonText}</span>
            <span className="hero-button-icon">›</span>
          </button>
        </div>

        {/* MAIN HERO IMAGE */}
        <div className="hero-image-wrapper">
          <img
            src={heroImage}
            alt="Featured product"
            className="hero-image"
          />
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="hero-side-card">
          <img
            src={sideImage}
            alt="Featured collection"
            className="hero-side-image"
          />
        </div>
      </div>

      {/* Decorative bottom-right element */}
      <div className="hero-decoration" />
    </section>
  );
}