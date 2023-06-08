/**
 *
 *  This is the desktop nav
 *
 */

import { useState } from "react";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaCaretDown,
} from "react-icons/fa";

import { LOGO } from "@/assets/cdns/CDNIcons";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const DesktopNav = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleBlur = () => {
    /**
     *  This is used to hide the dropdown when the user clicks off the input
     */

    if (isChecked) {
      setTimeout(() => {
        setIsChecked(false);

        document.getElementById("desktopDropdown").style.opacity = 0;
        document.getElementById("desktopDropdown").style.visibility = "hidden";
      }, 200);
    }
  };

  const handleChange = (e) => {
    /**
     *  This is used to display the dropdown when the user clicks the input
     */

    setIsChecked(e.target.checked);

    if (e.target.checked) {
      document.getElementById("desktopDropdown").style.opacity = 1;
      document.getElementById("desktopDropdown").style.visibility = "visible";
    } else {
      document.getElementById("desktopDropdown").style.opacity = 0;
      document.getElementById("desktopDropdown").style.visibility = "hidden";
    }
  };

  return (
    <nav id="desktopNav" className={`${styles.desktop_nav}`}>
      <div className={`${styles.desktop_nav_top}`}>
        <div className={`${styles.desktop_nav_top_inner}`}>
          <div
            className={`${styles.desktop_nav_top_inner_box} container-fluid`}
          >
            <div className={`${styles.desktop_nav_top_inner_row} row`}>
              <div
                className={`${styles.desktop_nav_top_inner_side} ${styles.desktop_nav_top_L} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
              >
                <div className={`${styles.desktop_nav_top_inner_side_cnt}`}>
                  <div>
                    <FaMapMarkerAlt className={`${styles.icon}`} />

                    <span>Winston-Salem, NC</span>
                  </div>
                  <div>
                    <FaPhoneAlt className={`${styles.icon}`} />

                    <span>+1 202-555-0110</span>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.desktop_nav_top_inner_side} ${styles.desktop_nav_top_R} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
              >
                <div className={`${styles.desktop_nav_top_inner_side_cnt}`}>
                  <ul>
                    <li>
                      <div>
                        <FaLinkedin className={`${styles.icon}`} />
                      </div>
                    </li>
                    <li>
                      <div>
                        <FaInstagram className={`${styles.icon}`} />
                      </div>
                    </li>
                    <li>
                      <div>
                        <FaFacebook className={`${styles.icon}`} />
                      </div>
                    </li>
                    <li>
                      <div>
                        <FaTwitter className={`${styles.icon}`} />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.desktop_nav_main}`}>
        <div className={`${styles.desktop_nav_main_inner}`}>
          <div
            className={`${styles.desktop_nav_main_inner_box} container-fluid`}
          >
            <div className={`${styles.desktop_nav_main_inner_row} row`}>
              <div
                className={`${styles.desktop_nav_main_inner_side} ${styles.desktop_nav_main_L} col-lg-5 col-md-5 col-sm-5 col-xs-5`}
              >
                <div className={`${styles.desktop_nav_main_inner_side_cnt}`}>
                  <a
                    href="/"
                    className={`${styles.logo} index-link half-second`}
                  >
                    <img
                      data-src={LOGO}
                      className="lazyload"
                      alt="Carmondo logo"
                    />

                    <span>
                      car<span>mondo</span>
                    </span>
                  </a>
                </div>
              </div>
              <div
                className={`${styles.desktop_nav_main_inner_side} ${styles.desktop_nav_main_R} col-lg-7 col-md-7 col-sm-7 col-xs-7`}
              >
                <div className={`${styles.desktop_nav_main_inner_side_cnt}`}>
                  <ul className={`${styles.main_links}`}>
                    <li>
                      <a href="/" className="half-second index-link">
                        <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <a href="/info" className="half-second info-link">
                        <span>About Us</span>
                      </a>
                    </li>
                    <li className="cars-link half-second">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />

                      <FaCaretDown className={`${styles.icon}`} />

                      <span>Our Cars</span>

                      <div
                        className={`${styles.dropdown}`}
                        id="desktopDropdown"
                      >
                        <ul>
                          <li>
                            <a href="/cars" className="half-second">
                              <span>All Cars</span>
                            </a>
                          </li>
                          <li>
                            <a href="/cars#coupe" className="half-second">
                              <span>Coupes</span>
                            </a>
                          </li>
                          <li>
                            <a href="/cars#pickup" className="half-second">
                              <span>Pickups</span>
                            </a>
                          </li>
                          <li>
                            <a href="/cars#sedan" className="half-second">
                              <span>Sedans</span>
                            </a>
                          </li>
                          <li>
                            <a href="/cars#suv" className="half-second">
                              <span>SUVs</span>
                            </a>
                          </li>
                          <li>
                            <a href="/cars#wagon" className="half-second">
                              <span>Wagons</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="/contact" className="half-second contact-link">
                        <span>Contact Us</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
