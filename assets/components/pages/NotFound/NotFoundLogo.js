/**
 *
 *  This is the Not Found Logo
 *
 */

import { LOGO } from "@/assets/cdns/CDNIcons";

import styles from "../../../styles/modules/NotFound/NotFound.module.css";

export const NotFoundLogo = () => {
  return (
    <section
      id="notFoundLogo"
      className={`${styles.not_found_logo} overrides_NotFoundLogo`}
    >
      <div>
        <a href="/" className="half-second index-link">
          <img data-src={LOGO} className="lazyload" alt="Carmondo Logo" />

          <span>Carmondo</span>
        </a>
      </div>
    </section>
  );
};
