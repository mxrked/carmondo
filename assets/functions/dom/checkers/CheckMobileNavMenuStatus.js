/**
 *
 *  This is used to check if the user has the mobile nav open/close depending on their device
 *
 */

export default function CheckMobileNavMenuStatus() {
  // On Desktop
  if (sessionStorage.getItem("Desktop Device")) {
    if (sessionStorage.getItem("FM Loaded")) {
      document.body.style.overflowY = "auto";
      document.body.style.pointerEvents = "auto";

      // document.documentElement.style.overflowY = "auto";
      // document.documentElement.style.pointerEvents = "auto";
    }
  }

  // On Mobile
  if (sessionStorage.getItem("Mobile Device")) {
    // If opened
    if (sessionStorage.getItem("Mobile Nav Opened")) {
      if (sessionStorage.getItem("FM Loaded")) {
        document.body.style.overflowY = "hidden";
        document.body.style.pointerEvents = "none";

        // document.documentElement.style.overflowY = "hidden";
        // document.documentElement.style.pointerEvents = "none";
      }
    }

    // If closed
    if (!sessionStorage.getItem("Mobile Nav Opened")) {
      if (sessionStorage.getItem("FM Loaded")) {
        document.body.style.overflowY = "auto";
        document.body.style.pointerEvents = "auto";

        // document.documentElement.style.overflowY = "auto";
        // document.documentElement.style.pointerEvents = "auto";
      }
    }
  }
}
