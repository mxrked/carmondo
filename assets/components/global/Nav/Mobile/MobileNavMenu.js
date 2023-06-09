/**
 *
 *  This is the mobile nav menu
 *
 */

import { useState } from "react";

import { FaCaretDown, FaTimes } from "react-icons/fa";

import { LOGO } from "@/assets/cdns/CDNIcons";

import CloseMobileNav from "@/assets/functions/dom/closers/CloseMobileNav";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNavMenu = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    /**
     *  This is used to display the dropdown when the user clicks the input
     */

    setIsChecked(e.target.checked);

    if (e.target.checked) {
      document.getElementById("carsLinks").style.height = "275px";
      document.getElementById("mobileNavMenuCBIcon").style.transform =
        "rotate(180deg)";
    } else {
      document.getElementById("carsLinks").style.height = 0;
      document.getElementById("mobileNavMenuCBIcon").style.transform =
        "rotate(0deg)";
    }
  };
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
            <ul className={`${styles.main_links}`}>
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
              <li className={`${styles.dd_link} cars-link half-second`}>
                <input
                  id="mobileNavMenuCB"
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleChange}
                />

                <span>Our Cars</span>

                <FaCaretDown
                  id="mobileNavMenuCBIcon"
                  className={`${styles.icon}`}
                />
              </li>

              <ul id="carsLinks" className="half-second">
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
