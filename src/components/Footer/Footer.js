import * as React from "react";
import { footer_heart } from "./Footer.module.css";
const Footer = () => {
  return (
    <footer class="footer">
      <div class="content has-text-centered">
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
