// This file is used to hold some objects

import Type from "../classes/Type";
import {
  BG_TYPES_ALL,
  BG_TYPES_COUPE,
  BG_TYPES_PICKUPTRUCK,
  BG_TYPES_SEDAN,
  BG_TYPES_SUV,
  BG_TYPES_WAGON,
} from "../../cdns/CDNBgs";

const OBJ_ALL_VEHICLES = new Type(
  "T_01",
  "All Vehicles",
  BG_TYPES_ALL,
  "/cars"
);
const OBJ_COUPES = new Type("T_02", "Coupes", BG_TYPES_COUPE, "/cars/#coupe");
const OBJ_PICKUPS = new Type(
  "T_03",
  "Pickups",
  BG_TYPES_PICKUPTRUCK,
  "/cars/#pickup"
);
const OBJ_SEDANS = new Type("T_04", "SEDANS", BG_TYPES_SEDAN, "/cars/#sedan");
const OBJ_SUVS = new Type("T_05", "SUVs", BG_TYPES_SUV, "/cars/#suv");
const OBJ_WAGONS = new Type("T_06", "Wagons", BG_TYPES_WAGON, "/cars/#wagon");

export {
  OBJ_ALL_VEHICLES,
  OBJ_COUPES,
  OBJ_PICKUPS,
  OBJ_SEDANS,
  OBJ_SUVS,
  OBJ_WAGONS,
};
