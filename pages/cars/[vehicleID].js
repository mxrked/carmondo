// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

// Library Imports

// Data/Functions/Images Imports
import ManipPageLink from "@/assets/functions/dom/manip/ManipPageLinks";
import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";
import { CARS_KWS } from "@/assets/data/variables/ARRAYS";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Nav/Mobile/MobileNavMenu";

import styles from "../../assets/styles/modules/Cars/Cars.module.css";

export async function getStaticPaths() {
  try {
    const ALL_VEHICLES = await fetch(
      "https://raw.githubusercontent.com/mxrked/carmondo_CDN/master/files/json/ALL_VEHICLES.json"
    );

    if (!ALL_VEHICLES.ok) {
      throw new Error("Failed to fetch data from the JSON endpoint");
    }

    // Parsing the data
    const ALL_VEHICLES_DATA = await ALL_VEHICLES.json();

    // Generating all vehicle pages/paths
    const paths = ALL_VEHICLES_DATA.map((item) => ({
      params: { vehicleID: item.vehicleID },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error fetching index browse data:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps(context) {
  const { params } = context;

  // Getting the link for the JSON
  try {
    const ALL_VEHICLES = await fetch(
      "https://raw.githubusercontent.com/mxrked/carmondo_CDN/master/files/json/ALL_VEHICLES.json"
    );

    if (!ALL_VEHICLES.ok) {
      throw new Error("Failed to fetch data from the JSON endpoint");
    }

    // Parsing the data
    const ALL_VEHICLES_DATA = await ALL_VEHICLES.json();

    // Finding the specific item using vehicleID
    const VEHICLE = ALL_VEHICLES_DATA.find(
      (item) => item.vehicleID === params.vehicleID
    );

    // If no vehicle, throw error
    if (!VEHICLE) {
      throw new Error(`Vehicle with ID "${params.vehicleID}" not found`);
    }

    // Returning the props
    return {
      props: {
        VEHICLE,
      },
    };
  } catch (error) {
    console.error("Error fetching index browse data:", error);
    return {
      props: {
        VEHICLE: null, // Assign null in case of an error
      },
    };
  }
}

export default function Vehicle({ VEHICLE }) {
  const router = useRouter();

  // Disabling Page Links
  useEffect(() => {
    ManipPageLink("disable", "multiple", ".cars-link");
  }, []);

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  return (
    <div id="PAGE" className="page overrides_Vehicle full-second">
      <Head>
        <title>carmondo - {VEHICLE.vehicleName}</title>
        <meta name="keywords" content={CARS_KWS} />
        <meta
          name="description"
          content="Carmondo hosts a large array of different vehicles. From  sedans, suvs, coupes, pickups and wagons; there will always be a vehicle for you!"
        />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content={`carmondo - ${VEHICLE.vehicleName}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:url" content={router.pathname} />
        <meta
          name="google-site-verification"
          content="V5Rtva_ZUQGbD75j-mxlBzvediiQnPt2hEi7YaPPAEE"
        />

        <link rel="canonical" href={router.pathname} />
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

      <MobileNavMenu />
      <DesktopNav />

      <main id="PAGE_CNT">
        <MobileNav />

        <div>
          <h1>{VEHICLE.vehicleID}</h1>
          <img data-src={VEHICLE.vehicleImg} className="lazyload" />
          <h1>{VEHICLE.vehicleName}</h1>
          <h1>{VEHICLE.vehicleType}</h1>
          <h1>{VEHICLE.vehicleEngine}</h1>
          <h1>{VEHICLE.vehicleTransmission}</h1>
          <h1>{VEHICLE.vehicleFuelEconomy}</h1>
          <h1>{VEHICLE.vehiclePrice}</h1>
          <h1>{VEHICLE.vehicleMileage}</h1>
        </div>

        {/** <TestBox /> */}
      </main>
    </div>
  );
}
