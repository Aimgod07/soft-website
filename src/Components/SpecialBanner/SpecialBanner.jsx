import React from "react";
import "./SpecialBanner.css";

export default function SpecialBanner({
  imageSrc = "/images/model.png",
  imageAlt = "Fashion model",
  qrSrc,
  qrAlt = "Scan QR code",

  title = "FASHION",
  highlight = "MADE",
  subtitle = "SIMPLE.",

  buttonText = "SHOP NOW",
  onButtonClick,

  badgeNumber = "0058",
  badgeText = "SCAN TO SEE THE MANUAL",

  // Controls how replacement images behave inside the fixed image slot.
  imageFit = "cover",
  imagePosition = "center",

  className = "",
}) {
  return (
    <section className={`special-banner ${className}`}>
      {/* Left vertical badge */}
      {/* <div className="special-banner__badge">
        <div className="special-banner__badge-top">
          <div className="special-banner__dress-icon">
            <span className="dress-icon__head" />
            <span className="dress-icon__body" />
            <span className="dress-icon__left-arm" />
            <span className="dress-icon__right-arm" />
          </div>
        </div>

        <div className="special-banner__badge-number">{badgeNumber}</div>

        <div className="special-banner__badge-bottom">
          <span className="special-banner__badge-text">{badgeText}</span>

          <div className="special-banner__qr">
            {qrSrc ? (
              <img
                src={qrSrc}
                alt={qrAlt}
                className="special-banner__qr-image"
              />
            ) : (
              <div className="special-banner__qr-placeholder">QR</div>
            )}
          </div>
        </div>
      </div> */}

      {/* Main content */}
      <div className="special-banner__content">
        <div className="special-banner__copy">
          <h2 className="special-banner__title">
            <span>{title}</span>
            <strong>{highlight}</strong>
            <span>{subtitle}</span>
          </h2>

          <button
            type="button"
            className="special-banner__button"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>

        {/* Fixed image slot */}
        <div className="special-banner__image-slot">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="special-banner__image"
              style={{
                objectFit: imageFit,
                objectPosition: "center 2%",
              }}
            />
          ) : (
            <div className="special-banner__image-placeholder">IMAGE</div>
          )}
        </div>
      </div>
    </section>
  );
}
