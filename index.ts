import { mapArea } from "./src/mars/terrain";
import { getMap } from "./src/vehicles/rover/rover";
import { landingRover, movingRover } from "./src/vehicles/rover/controllers";

//set map size 🗺️
let mappedArea = mapArea(5, 5);

//Initial coordinate
const x = 1;
const y = 2;
const direction = "N";

//Passing map to rover
getMap(mappedArea);

landingRover(x, y, direction);

movingRover("LMLMLMLMM");
