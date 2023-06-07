// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";

// Style Imports
import "../assets/styles/modules/NotFound/NotFound.module.css";

export default function NotFound() {
  const router = useRouter();

  return (
    <div id="PAGE" className="page overrides_404 full-second">
      <PageHead />

      <main id="PAGE_CNT"></main>
    </div>
  );
}
