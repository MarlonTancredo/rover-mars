import { mapArea } from "./src/mars/terrain";
import { getMap } from "./src/vehicles/rover/rover";
import { landingRover, movingRover } from "./src/vehicles/rover/controllers";

//set map size 🗺️
let mappedArea = mapArea(5, 5);

//Initial coordinate
const x = 3;
const y = 3;
const direction = "E";

//Passing map to rover
getMap(mappedArea);

landingRover(x, y, direction);

movingRover("MMRMMRMRRM");
