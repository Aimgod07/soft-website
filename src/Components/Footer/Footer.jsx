
import "./Footer.css";

const BrandFooter = ({
  brandName = "YOUR BRAND",
  emailPlaceholder = "E-mail*",
}) => {
  return (
    <footer className="brand-footer">
      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="newsletter-inner">
          <h2 className="newsletter-title">NEWSLETTER</h2>

          <p className="newsletter-subtitle">
            Stay in the loop with our latest drops!
          </p>

          <p className="newsletter-description">
            News, exclusive releases, styling tips and special offers
            delivered straight to your inbox.
          </p>

          <p className="newsletter-cta">Sign up for free!</p>

          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder={emailPlaceholder}
              aria-label="Email address"
              required
            />

            <button type="submit">SUBSCRIBE ME</button>
          </form>

          <p className="privacy-note">
            By signing up, you agree to our privacy policy.
          </p>
        </div>
      </section>

      {/* Footer */}
      <section className="footer-section">
        <div className="footer-curve" />

        <div className="footer-content">
          {/* Navigation */}
          <div className="footer-grid">
            <div className="footer-column">
              <h3>SERVICES</h3>

              <a href="#collections">Collections</a>
              <a href="#new-arrivals">New arrivals</a>
              <a href="#shipping">Shipping</a>
              <a href="#returns">Returns</a>
              <a href="#size-guide">Size guide</a>
            </div>

            <div className="footer-column">
              <h3>SHOP</h3>

              <a href="#men">Men</a>
              <a href="#women">Women</a>
              <a href="#accessories">Accessories</a>
              <a href="#sale">Sale</a>
              <a href="#all-products">All products</a>
            </div>

            <div className="footer-column">
              <h3>{brandName}</h3>

              <a href="#about">About us</a>
              <a href="#contact">Contact us</a>
              <a href="#stores">Stores</a>
              <a href="#faq">FAQ</a>
              <a href="#journal">Journal</a>
            </div>

            {/* Club signup */}
            <div className="footer-club">
              <h3>JOIN THE {brandName} CLUB</h3>

              <p>
                Receive exclusive drops, styling inspiration and special
                offers from {brandName}.
              </p>

              <form
                className="club-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Your email"
                  aria-label="Club email address"
                  required
                />

                <button type="submit">SUBMIT</button>
              </form>

              <p className="club-privacy">
                By signing up, you agree to our privacy policy.
              </p>

              <div className="socials">
                <a href="#instagram" aria-label="Instagram">
                  ◎
                </a>

                <a href="#linkedin" aria-label="LinkedIn">
                  in
                </a>

                <a href="#tiktok" aria-label="TikTok">
                  ♪
                </a>
              </div>
            </div>
          </div>

          {/* Brand wordmark */}
          <div className="brand-wordmark" aria-label={brandName}>
            {brandName}
          </div>

          {/* Bottom legal area */}
          <div className="footer-bottom">
            <div className="copyright">
              <p>© 2026 {brandName}. All rights reserved.</p>
              <p>
                Your fashion destination for timeless pieces and contemporary
                style.
              </p>
            </div>

            <div className="legal-links">
              <a href="#legal">Legal notice</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default BrandFooter;