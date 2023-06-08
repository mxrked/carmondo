/**
 *
 *  This is to toggle the mobile nav menu
 *
 */

import DeclareStorageVariable from "../../data/storage/DeclareStorageVariable";

export default function ToggleMobileNav() {
  const DARKEN = document.getElementById("mobileNavMenuDarken");
  const MAIN = document.getElementById("mobileNavMenuMain");
  const MAIN_CNT = document.getElementById("mobileNavMenuMainCnt");

  document.body.style.pointerEvents = "none";
  document.body.style.overflowY = "hidden";

  DeclareStorageVariable("session", "Mobile Nav Opened", true);

  setTimeout(() => {
    DARKEN.style.opacity = 1;
    DARKEN.style.visibility = "visible";
  }, 600);

  setTimeout(() => {
    MAIN.style.transform = "translateX(0)";
  }, 1200);

  setTimeout(() => {
    MAIN_CNT.style.opacity = 1;
    MAIN_CNT.style.visibility = "visible";
  }, 2000);

  setTimeout(() => {
    DARKEN.style.pointerEvents = "auto";
    MAIN.style.pointerEvents = "auto";
    MAIN.style.overflowY = "auto";
  }, 2500);
}
