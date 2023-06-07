/**
 *
 *  This is the page's meta data and tab settings
 *
 */

import { useRouter } from "next/router";

import Head from "next/head";

import {
  INDEX_KWS,
  INFO_KWS,
  CARS_KWS,
  CONTACT_KWS,
} from "@/assets/data/variables/ARRAYS";

export const PageHead = () => {
  const router = useRouter();

  //! Descriptions
  const INDEX_DESC =
    "Carmondo is your one stop shop for used and new cars. We provide a range of different automotives from sedans, suvs, coupes, pickups and wagons. If the price is too high we can work it out!";
  const INFO_DESC =
    "Learn the background and history of Carmondo and how it is on it's way to a better future.";
  const CONTACT_DESC =
    "Get in touch with Carmondo for help regarding a specific car or minor issue you need help with.";
  const CARS_DESC =
    "Carmondo hosts a large array of different vehicles. From  sedans, suvs, coupes, pickups and wagons; there will always be a vehicle for you!";

  const DESCS = [INDEX_DESC, INFO_DESC, CONTACT_DESC, CARS_DESC];

  let desc;
  let kws;
  let title;
  let robots;
  let url;

  // Index Page
  if (router.pathname == "/") {
    title = "carmondo - Home";
    robots = "index, follow";
    url = router.pathname;

    if (INDEX_DESC.length > 0) {
      desc = DESCS[0];
    } else {
      desc = DESCS[0];
    }

    kws = INDEX_KWS;
  }

  // Info Page
  if (router.pathname == "/info") {
    title = "carmondo - About Us";
    robots = "index, follow";
    url = router.pathname;

    if (INFO_DESC.length > 0) {
      desc = DESCS[1];
    } else {
      desc = DESCS[1];
    }

    kws = INFO_KWS;
  }
  // Contact Page
  if (router.pathname == "/contact") {
    title = "carmondo - Contact Us";
    robots = "index, follow";
    url = router.pathname;

    if (CONTACT_DESC.length > 0) {
      desc = DESCS[2];
    } else {
      desc = DESCS[2];
    }

    kws = CONTACT_KWS;
  }

  // Projects Page
  if (router.pathname == "/cars") {
    title = "carmondo - Our Cars";
    robots = "index, follow";
    url = router.pathname;

    if (CARS_DESC.length > 0) {
      desc = DESCS[3];
    } else {
      desc = DESCS[3];
    }

    kws = CARS_KWS;
  }

  // 404 Page
  if (router.pathname == "/404") {
    title = "carmondo - 404";
    robots = "no index, no follow";
    desc = "No description";
    kws = "No keywords";
    url = router.pathname;
  }

  return (
    <Head id="pageHead">
      <title>{title}</title>

      <meta name="keywords" content={kws} />
      <meta name="description" content={desc} />
      <meta name="robots" content={robots} />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:url" content={url} />
      <meta
        name="google-site-verification"
        content="V5Rtva_ZUQGbD75j-mxlBzvediiQnPt2hEi7YaPPAEE"
      />

      <link rel="canonical" href={url} />

      <link
        rel="shortcut icon"
        href="https://raw.githubusercontent.com/mxrked/carmondo_CDN/master/icons/tab-icons/favicon.ico"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://raw.githubusercontent.com/mxrked/carmondo_CDN/master/icons/tab-icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://raw.githubusercontent.com/mxrked/carmondo_CDN/master/icons/tab-icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://raw.githubusercontent.com/mxrked/carmondo_CDN/master/icons/tab-icons/favicon-16x16.png"
      />
    </Head>
  );
};
