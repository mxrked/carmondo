/**
 *
 *  This is the Index Browse
 *
 */

import Slider from "react-slick";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexBrowse = (props) => {
  const SLIDER_SETTINGS = {
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    // autoplay: true,
    // autoplaySpeed: 5000,
    infinite: true,
    arrows: true,
    dots: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 419,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <section
      id="indexBrowse"
      className={`${styles.index_browse} overrides_IndexBrowse`}
    >
      <div className={`${styles.index_browse_inner}`}>
        <div className={`${styles.index_browse_inner_top}`}>
          <h1>Browse Our Vehicles.</h1>

          <a href="/cars" className="half-second">
            <span>Browse Vehicles</span>
          </a>
        </div>

        {/**
         */}

        <div className={`${styles.index_browse_inner_slider_holder}`}>
          <Slider {...SLIDER_SETTINGS}>
            {props.index_browse.map((item) => (
              <div className={`${styles.slider_slide}`} key={item.vehicleID}>
                <div className={`${styles.slider_slide_inner}`}>
                  <div className={`${styles.slider_slide_inner_img}`}>
                    <img
                      data-src={item.vehicleImg}
                      className="lazyload"
                      alt={`Image of ${item.vehicleName}`}
                    />
                  </div>

                  <div className={`${styles.slider_slide_inner_details}`}>
                    <div className={`${styles.name_and_type}`}>
                      <a
                        href={`/cars/${item.vehicleID}`}
                        className={`${styles.name}`}
                      >
                        <span>{item.vehicleName}</span>
                      </a>

                      <span className={`${styles.type}`}>
                        {item.vehicleType}
                      </span>
                    </div>

                    <div
                      className={`${styles.details_inner_box} container-fluid`}
                    >
                      <div className={`${styles.details_inner_row} row`}>
                        <div
                          className={`${styles.details_inner_side} ${styles.details_L} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
                        >
                          <div className={`${styles.details_inner_side_cnt}`}>
                            <div className={`${styles.engine_set}`}>
                              <strong>Engine</strong>

                              <span>{item.vehicleEngine}</span>
                            </div>
                            <div className={`${styles.transmission_set}`}>
                              <strong>Transmission</strong>

                              <span>{item.vehicleTransmission}</span>
                            </div>
                            <div className={`${styles.fuel_eco_set}`}>
                              <strong>Fuel Economy</strong>

                              <span>{item.vehicleFuelEconomy}</span>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`${styles.details_inner_side} ${styles.details_R} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
                        >
                          <div className={`${styles.details_inner_side_cnt}`}>
                            <div className={`${styles.sets_holder}`}>
                              <div className={`${styles.price_set}`}>
                                <strong>Price</strong>

                                <span>{item.vehiclePrice}</span>
                              </div>
                              <div className={`${styles.mileage_set}`}>
                                <strong>Mileage</strong>

                                <span>{item.vehicleMileage}</span>
                              </div>
                            </div>

                            <div className={`${styles.links}`}>
                              <a
                                href="/contact#buy"
                                className={`${styles.buy} half-second`}
                              >
                                <span>Buy</span>
                              </a>

                              <a
                                href="/contact#trade"
                                className={`${styles.trade} half-second`}
                              >
                                <span>Trade</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
