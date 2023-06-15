// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import ManipPageLink from "@/assets/functions/dom/manip/ManipPageLinks";
import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";
import { JSON_INDEX_VEHICLES } from "@/assets/cdns/CDNFiles";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { TestBox } from "@/assets/components/global/All/TestBox";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Nav/Mobile/MobileNavMenu";

import { IndexTop } from "@/assets/components/pages/Index/IndexTop";
import { IndexUnderTop } from "@/assets/components/pages/Index/IndexUnderTop";
import { IndexBrowse } from "@/assets/components/pages/Index/IndexBrowse";

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";

export async function getStaticProps() {
  // Getting the link for the JSON
  try {
    const INDEX_BROWSE = await fetch(
      "https://raw.githubusercontent.com/mxrked/carmondo_CDN/master/files/json/INDEX_VEHICLES.json"
    );

    // Parsing the data
    const INDEX_BROWSE_DATA = await INDEX_BROWSE.json();

    // Returning the props
    return {
      props: {
        index_browse: INDEX_BROWSE_DATA || null,
      },
    };
  } catch (error) {
    console.error("Error fetching index browse data:", error);
    return {
      props: {
        index_browse: null, // Assign null in case of an error
      },
    };
  }
}

export default function Home({ index_browse }) {
  const router = useRouter();

  // Disabling Page Links
  useEffect(() => {
    ManipPageLink("disable", "multiple", ".index-link");
  }, []);

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  return (
    <div id="PAGE" className="page overrides_Index full-second">
      <PageHead />

      <MobileNavMenu />
      <DesktopNav />

      <main id="PAGE_CNT">
        <MobileNav />

        <IndexTop />
        <IndexUnderTop />
        <IndexBrowse index_browse={index_browse} />

        {/** <TestBox /> */}
      </main>
    </div>
  );
}
