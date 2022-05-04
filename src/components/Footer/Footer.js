import * as React from "react";
import {
  footer_heart,
  paymentBannerContainer,
  footerAuthorContainer,
} from "./Footer.module.css";
import {
  Visa,
  Mastercard,
  Paypal,
  Amex,
  Applepay,
  Amazon,
  Klarna,
  Clearpay,
} from "react-pay-icons";

const Footer = () => {
  return (
    <footer class="footer">
      <div className={paymentBannerContainer}>
        <Visa style={{ margin: 10, width: 40 }} />
        <Mastercard style={{ margin: 10, width: 40 }} />
        <Paypal style={{ margin: 10, width: 40 }} />
        <Amex style={{ margin: 10, width: 40 }} />
        <Applepay style={{ margin: 10, width: 40 }} />
        <Amazon style={{ margin: 10, width: 40 }} />
        <Klarna style={{ margin: 10, width: 40 }} />
        <Clearpay style={{ margin: 10, width: 40 }} />
      </div>
      <div class={`content has-text-centered ${footerAuthorContainer}`}>
        <p>
          <strong>S-Mart</strong>
          <br />
          <p class="footer-heart">
            Made with{" "}
            <g-emoji
              class="g-emoji"
              alias="heart"
              fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"
            >
              <img
                class="emoji"
                alt="heart"
                height="20"
                width="20"
                src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"
              />
            </g-emoji>{" "}
            by <a href="https://armin.id">Arman Shazad</a>
          </p>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
