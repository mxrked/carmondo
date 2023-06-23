/**
 *
 *  This is the Index Types
 *
 */

import { BackgroundImage } from "react-image-and-background-image-fade";

import { VEHICLE_TYPES } from "@/assets/data/variables/ARRAYS";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexTypes = () => {
  return (
    <section
      id="indexTypes"
      className={`${styles.index_types} overrides_IndexTypes`}
    >
      <div className={`${styles.index_types_inner}`}>
        <h1>Browse By Vehicle Type.</h1>

        <div
          className={`${styles.index_types_inner_types_box} container-fluid`}
        >
          <div className={`${styles.index_types_inner_types_row} row`}>
            {VEHICLE_TYPES.map((item) => (
              <div
                key={item._typeID}
                className={`${styles.type} index-type col-lg-6 col-md-6 col-sm-6 col-xs-6`}
              >
                <div className={`${styles.type_inner}`}>
                  <BackgroundImage
                    src={item._typeBg}
                    className={`${styles.bg} half-second bg`}
                    width="100%"
                    height="100%"
                  />

                  <div className={`${styles.overlay} overlay half-second`}>
                    <div>
                      <span className={`${styles.type_name}`}>
                        {item._typeName}
                      </span>

                      <a
                        href={item._typeLink}
                        className="half-second"
                        onMouseEnter={(e) => {
                          const OVERLAY = e.currentTarget
                            .closest(".index-type")
                            .querySelector(".overlay");

                          OVERLAY.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
                        }}
                        onMouseLeave={(e) => {
                          const OVERLAY = e.currentTarget
                            .closest(".index-type")
                            .querySelector(".overlay");

                          OVERLAY.style.backgroundColor = "rgba(0, 0, 0, 0.65)";
                        }}
                      >
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
