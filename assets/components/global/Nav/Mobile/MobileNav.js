/**
 *
 *  This is the mobile nav
 *
 */

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

export const MobileNav = () => {
  return (
    <nav id="mobileNav" className={`${styles.mobile_nav}`}>
      <div className={`${styles.mobile_nav_top}`}>
        <div className={`${styles.mobile_nav_top_inner}`}>
          <div className={`${styles.mobile_nav_top_inner_box} container-fluid`}>
            <div className={`${styles.mobile_nav_top_inner_row} row`}>
              <div
                className={`${styles.mobile_nav_top_inner_side} ${styles.mobile_nav_top_L} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
              >
                <div className={`${styles.mobile_nav_top_inner_side_cnt}`}>
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
                className={`${styles.mobile_nav_top_inner_side} ${styles.mobile_nav_top_R} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
              >
                <div className={`${styles.mobile_nav_top_inner_side_cnt}`}>
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

      <div className={`${styles.mobile_nav_main}`}>
        <div className={`${styles.mobile_nav_main_inner}`}>
          <div
            className={`${styles.mobile_nav_main_inner_box} container-fluid`}
          >
            <div className={`${styles.mobile_nav_main_inner_row} row`}>
              <div
                className={`${styles.mobile_nav_main_inner_side} ${styles.mobile_nav_L} col-lg-7 col-md-7 col-sm-7 col-xs-7`}
              ></div>
              <div
                className={`${styles.mobile_nav_main_inner_side} ${styles.mobile_nav_R} col-lg-5 col-md-5 col-sm-5 col-xs-5`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
