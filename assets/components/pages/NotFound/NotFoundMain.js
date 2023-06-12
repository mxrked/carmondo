/**
 *
 *  This is the Not Found Main
 *
 */

import { FaFaceFrown } from "react-icons/fa";

import styles from "../../../styles/modules/NotFound/NotFound.module.css";

export const NotFoundMain = () => {
  return (
    <section
      id="notFoundMain"
      className={`${styles.not_found_main} overrides_NotFoundMain`}
    >
      <div className={`${styles.not_found_main_inner}`}>
        <h1>404</h1>

        <p>
          Uh oh! Seems like the page you are looking for does not exist. No
          worries, you can go back to the home page using the link below.
        </p>

        <a href="/" className="half-second index-link">
          <span>Go Home</span>
        </a>
      </div>
    </section>
  );
};
