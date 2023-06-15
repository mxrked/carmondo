// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import ManipPageLink from "@/assets/functions/dom/manip/ManipPageLinks";
import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";

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
      <PageHead />

      <MobileNavMenu />
      <DesktopNav />

      <main id="PAGE_CNT">
        <MobileNav />

        <div>
          <h1>{VEHICLE.vehicleName}</h1>
        </div>

        {/** <TestBox /> */}
      </main>
    </div>
  );
}
