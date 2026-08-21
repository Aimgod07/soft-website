import React from "react";
import "./MainHero.css";

const DEFAULT_HERO_IMAGE = "/images/herogirl.png";
const DEFAULT_SIDE_IMAGE = "/images/model.png";

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
  floatingLabel = "Here",
}) {
  return (
    <section className="hero">
      <div className="hero-content">
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

        <div className="hero-image-wrapper">
          <img
            src={heroImage}
            alt="Featured product"
            className="hero-image"
          />
        </div>

        <div className="hero-side-card" aria-label="Featured style note">
          <div className="hero-side-note">{floatingLabel}</div>
          <button type="button" className="hero-side-favorite" aria-label="Favorite style">
            ♥
          </button>
          <img
            src={sideImage}
            alt="Featured collection"
            className="hero-side-mini-image"
          />
        </div>
      </div>

      <div className="hero-decoration" />
    </section>
  );
}