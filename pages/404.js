// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { NotFoundLogo } from "@/assets/components/pages/NotFound/NotFoundLogo";
import { NotFoundMain } from "@/assets/components/pages/NotFound/NotFoundMain";

// Style Imports
import "../assets/styles/modules/NotFound/NotFound.module.css";

export default function NotFound() {
  const router = useRouter();

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  return (
    <div id="PAGE" className="page overrides_404 full-second">
      <PageHead />

      <main id="PAGE_CNT">
        <NotFoundLogo />
        <NotFoundMain />
      </main>
    </div>
  );
}
