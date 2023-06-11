/**
 *
 *  This is the Index Under Top
 *
 */

import { BackgroundImage } from "react-image-and-background-image-fade";

import { BG_INDEX_ABOUT_US, BG_INDEX_CAR_SEARCH } from "@/assets/cdns/CDNBgs";

import styles from "../../../styles/modules/Index/Index.module.css";

const Side = (props) => {
  return (
    <div
      className={`${styles.index_under_top_side} ${
        styles[props.sideClassName]
      } index-under-top-side col-lg-6 col-md-6 col-sm-6 col-xs-6`}
    >
      <div className={`${styles.index_under_top_side_inner}`}>
        <BackgroundImage
          src={props.sideBG}
          width="100%"
          height="100%"
          className={`${styles.bg} bg`}
        />

        <div className={`${styles.index_under_top_side_overlay}`}>
          <div className={`${styles.index_under_top_side_overlay_cnt}`}>
            <h1>{props.sideH1}</h1>

            <a
              href={props.sideLink}
              className="half-second"
              onMouseEnter={(e) => {
                const BG = e.currentTarget
                  .closest(".index-under-top-side")
                  .querySelector(".bg");

                BG.classList.add("half-second");

                BG.style.scale = 1.08;
              }}
              onMouseLeave={(e) => {
                const BG = e.currentTarget
                  .closest(".index-under-top-side")
                  .querySelector(".bg");

                BG.style.scale = 1.04;

                setTimeout(() => {
                  BG.classList.remove("half-second");
                }, 400);
              }}
            >
              <span>{props.sideLinkTxt}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const IndexUnderTop = () => {
  return (
    <section
      id="indexUnderTop"
      className={`${styles.index_under_top} overrides_IndexUnderTop`}
    >
      <div className={`${styles.index_under_top_inner}`}>
        <div className={`${styles.index_under_top_inner_box} container-fluid`}>
          <div className={`${styles.index_under_top_inner_row} row`}>
            <Side
              sideClassName="index_under_top_L"
              sideBG={BG_INDEX_ABOUT_US}
              sideH1="Learn More About Us."
              sideLink="/info"
              sideLinkTxt="Learn More"
            />
            <Side
              sideClassName="index_under_top_R"
              sideBG={BG_INDEX_CAR_SEARCH}
              sideH1="Want A Specific Car?"
              sideLink="/contact#car-search"
              sideLinkTxt="Start Search"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
