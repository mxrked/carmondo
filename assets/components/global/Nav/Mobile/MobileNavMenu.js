/**
 *
 *  This is the mobile nav menu
 *
 */

import { FaCaretDown, FaTimes } from "react-icons/fa";

import { LOGO } from "@/assets/cdns/CDNIcons";

import CloseMobileNav from "@/assets/functions/dom/closers/CloseMobileNav";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNavMenu = () => {
  return (
    <div id="mobileNavMenu" className={`${styles.mobile_nav_menu}`}>
      <div
        id="mobileNavMenuDarken"
        className={`${styles.mobile_nav_menu_darken} full-second`}
        onClick={() => {
          CloseMobileNav();
        }}
      />

      <div
        id="mobileNavMenuMain"
        className={`${styles.mobile_nav_menu_main} full-second`}
      >
        <div
          id="mobileNavMenuMainCnt"
          className={`${styles.mobile_nav_menu_main_cnt} half-second`}
        >
          <div className={`${styles.mobile_nav_menu_main_cnt_top}`}>
            <div>
              <img
                data-src={LOGO}
                className="lazyload"
                alt="Logo for Carmondo"
              />

              <span>carmondo</span>
            </div>

            <button
              id="mobileNavMenuCloser"
              className="half-second"
              onClick={() => {
                CloseMobileNav();
              }}
            >
              <FaTimes className={`${styles.icon}`} />
            </button>
          </div>

          <div className={`${styles.mobile_nav_menu_main_cnt_links}`}>
            <ul>
              <li>
                <a href="/" className="nav-link index-link half-second">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="/info" className="nav-link info-link half-second">
                  <span>About Us</span>
                </a>
              </li>
              <li className="cars-link half-second">
                <input type="checkbox" />

                <span>Our Cars</span>

                <FaCaretDown className={`${styles.icon}`} />
              </li>

              <ul id="carsLinks">
                <li>
                  <a href="/cars" className="nav-link cars-link half-second">
                    <span>All Cars</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/cars#coupe"
                    className="nav-link cars-link half-second"
                  >
                    <span>Coupes</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/cars#pickup"
                    className="nav-link cars-link half-second"
                  >
                    <span>Pickups</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/cars#sedan"
                    className="nav-link cars-link half-second"
                  >
                    <span>Sedans</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/cars#suv"
                    className="nav-link cars-link half-second"
                  >
                    <span>SUVs</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/cars#wagon"
                    className="nav-link cars-link half-second"
                  >
                    <span>Wagons</span>
                  </a>
                </li>
              </ul>

              <li>
                <a
                  href="/contact"
                  className="nav-link contact-link half-second"
                >
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
