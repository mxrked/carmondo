/**
 *
 *  This is to close the mobile nav
 *
 */

import { Html } from "next/document";
import RemoveStorageVariable from "../../data/storage/RemoveStorageVariable";

export default function CloseMobileNav() {
  const DARKEN = document.getElementById("mobileNavMenuDarken");
  const MAIN = document.getElementById("mobileNavMenuMain");
  const MAIN_CNT = document.getElementById("mobileNavMenuMainCnt");

  DARKEN.style.pointerEvents = "none";
  MAIN.style.pointerEvents = "none";
  MAIN.style.overflowY = "hidden";

  MAIN_CNT.style.opacity = 0;
  MAIN_CNT.style.visibility = "hidden";

  document.getElementById("mobileNavMenuCB").checked = false;
  document.getElementById("carsLinks").style.height = 0;
  document.getElementById("mobileNavMenuCBIcon").style.transform =
    "rotate(0deg)";

  setTimeout(() => {
    MAIN.style.transform = "translateX(100%)";
  }, 900);

  setTimeout(() => {
    DARKEN.style.opacity = 0;
    DARKEN.style.visibility = "hidden";
  }, 1000);

  setTimeout(() => {
    document.body.style.pointerEvents = "auto";
    document.body.style.overflowY = "auto";

    // Enables html pointerEvents and overflowY
    document.documentElement.style.pointerEvents = "auto";
    document.documentElement.style.overflowY = "auto";

    RemoveStorageVariable("session", "Mobile Nav Opened");
  }, 2400);
}
