/**
 *
 *  This is the Index Top
 *
 */

import { useState, useEffect, useRef } from "react";

import {
  BG_INDEX_TOP_1,
  BG_INDEX_TOP_2,
  BG_INDEX_TOP_3,
  BG_INDEX_TOP_4,
  BG_INDEX_TOP_5,
} from "../../../cdns/CDNBgs";

import { BackgroundImage } from "react-image-and-background-image-fade";
import Slider from "react-slick";

import styles from "../../../styles/modules/Index/Index.module.css";

const IndexTopSlide = ({
  slideID,
  slideBG,
  mainText,
  carsTypeLink,
  active,
}) => {
  // Storing the state of the animations
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isFadingIn, setIsFadingIn] = useState(false);

  // Handlers
  const handleBeforeChange = () => {
    setIsFadingOut(true);
  };
  const handleAfterChange = () => {
    setIsFadingOut(false);
    setIsFadingIn(true);
  };

  // This is used to show the content after the slide is done animating
  useEffect(() => {
    if (active) {
      setIsFadingIn(true);
      setIsFadingOut(false);
      const timeout = setTimeout(() => {
        setIsFadingIn(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [active]);

  // Adding event listeners to pick up the animations and setting the animation to the specific element
  useEffect(() => {
    const slideElement = document.querySelector(`.${styles.index_top_slide}`);

    if (slideElement) {
      slideElement.addEventListener("beforeChange", handleBeforeChange);
      slideElement.addEventListener("afterChange", handleAfterChange);
    }

    return () => {
      if (slideElement) {
        slideElement.removeEventListener("beforeChange", handleBeforeChange);
        slideElement.removeEventListener("afterChange", handleAfterChange);
      }
    };
  }, []);

  return (
    <div
      className={`${styles.index_top_slide} ${styles[slideID]}`}
      id={slideID}
    >
      <BackgroundImage src={slideBG} className={`${styles.bg} bg`} />

      <div className={`${styles.dummy_overlay}`}>
        <div className={`${styles.dummy_overlay_cnt}`}>
          <span className={`${styles.top_text} half-second`}>
            Buy. Trade. Sell.
          </span>

          <h1 className="half-second">{mainText}.</h1>

          <div className={`${styles.links}`}>
            <a
              href={carsTypeLink}
              className={`${styles.cars_link} half-second`}
            >
              <span>View {mainText}</span>
            </a>

            <a
              href="/contact"
              className={`${styles.sell_trade_link} half-second`}
            >
              <span>Sell/Trade</span>
            </a>
          </div>
        </div>
      </div>

      <div className={`${styles.index_top_slide_overlay}`}>
        <div
          className={`${styles.index_top_slide_overlay_cnt} slide-cnt ${
            isFadingOut ? "fade-out" : ""
          } ${isFadingIn ? "fade-in" : ""}`}
          onAnimationEnd={() => setIsFadingOut(false)} // Displays the content again
        >
          <span className={`${styles.top_text} half-second`}>
            Buy. Trade. Sell.
          </span>

          <h1 className="half-second">{mainText}.</h1>

          <div className={`${styles.links}`}>
            <a
              href={carsTypeLink}
              className={`${styles.cars_link} half-second`}
            >
              <span>View {mainText}</span>
            </a>

            <a
              href="/contact"
              className={`${styles.sell_trade_link} half-second`}
            >
              <span>Sell/Trade</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const IndexTop = () => {
  const [activeSlide, setActiveSlide] = useState(0); // Storing the current slides
  const sliderRef = useRef(null);

  // Handlers
  const handleSlideChange = (currentSlide) => {
    setActiveSlide(currentSlide);

    // Preventing the cnt from hiding when scrolling on the first and last slide
    const firstSlideIndex = 0;
    const lastSlideIndex = 4;

    // Index checkers
    const isFirstSlide = currentSlide === firstSlideIndex;
    const isLastSlide = currentSlide === lastSlideIndex;

    // If on first slide
    if (isFirstSlide && !isLastSlide) {
      document.querySelector("#slide_1 .slide-cnt").classList.add("stay-put");
    } else {
      document
        .querySelector("#slide_1 .slide-cnt")
        .classList.remove("stay-put");
    }

    // If on last slide
    if (!isFirstSlide && isLastSlide) {
      document.querySelector("#slide_5 .slide-cnt").classList.add("stay-put");
    } else {
      document
        .querySelector("#slide_5 .slide-cnt")
        .classList.remove("stay-put");
    }
  };

  const handleBeforeChange = (currentSlide, nextSlide) => {
    const slideElements = document.querySelectorAll(
      `.${styles.index_top_slide}`
    );
    slideElements.forEach((slideElement) => {
      slideElement.dispatchEvent(new Event("beforeChange"));
    });

    // Preventing the cnt from hiding when scrolling on the first and last slide
    const firstSlideIndex = 0;
    const lastSlideIndex = 4;

    // Index checkers
    const isFirstSlide = currentSlide === firstSlideIndex;
    const isLastSlide = currentSlide === lastSlideIndex;

    // If on first slide
    if (isFirstSlide && !isLastSlide) {
      document.querySelector("#slide_1 .slide-cnt").classList.add("stay-put");
    } else {
      document
        .querySelector("#slide_1 .slide-cnt")
        .classList.remove("stay-put");
    }

    // If on last slide
    if (!isFirstSlide && isLastSlide) {
      document.querySelector("#slide_5 .slide-cnt").classList.add("stay-put");
    } else {
      document
        .querySelector("#slide_5 .slide-cnt")
        .classList.remove("stay-put");
    }

    if (!isFirstSlide && !isLastSlide) {
      document
        .querySelector("#slide_1 .slide-cnt")
        .classList.remove("stay-put");
      document
        .querySelector("#slide_5 .slide-cnt")
        .classList.remove("stay-put");
    }
  };

  const SLIDER_SETTINGS = {
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 5000,
    infinite: false,
    arrows: true,
    dots: true,
    // Hiding the content
    beforeChange: handleBeforeChange,
    // Showing the content
    afterChange: handleSlideChange,
    initialSlide: activeSlide,
  };

  return (
    <section id="indexTop" className={`${styles.index_top} overrides_IndexTop`}>
      <Slider {...SLIDER_SETTINGS} ref={sliderRef}>
        <IndexTopSlide
          slideID="slide_1"
          slideBG={BG_INDEX_TOP_1}
          mainText="Coupes"
          carsTypeLink="/cars#coupe"
          active={activeSlide === 0} // Slide 1
        />
        <IndexTopSlide
          slideID="slide_2"
          slideBG={BG_INDEX_TOP_2}
          mainText="Pickups"
          carsTypeLink="/cars#pickup"
          active={activeSlide === 1} // Slide 2
        />
        <IndexTopSlide
          slideID="slide_3"
          slideBG={BG_INDEX_TOP_3}
          mainText="Sedans"
          carsTypeLink="/cars#sedan"
          active={activeSlide === 2} // Slide 3
        />
        <IndexTopSlide
          slideID="slide_4"
          slideBG={BG_INDEX_TOP_4}
          mainText="SUVs"
          carsTypeLink="/cars#suv"
          active={activeSlide === 3} // Slide 3
        />
        <IndexTopSlide
          slideID="slide_5"
          slideBG={BG_INDEX_TOP_5}
          mainText="Wagons"
          carsTypeLink="/cars#wagon"
          active={activeSlide === 4} // Slide 3
        />
      </Slider>
    </section>
  );
};
