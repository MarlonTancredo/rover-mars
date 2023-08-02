import { mapArea } from "./src/mars/terrain";
import { landRover, moveRover } from "./src/vehicles/rover/rover";
import { displayRoverPosition } from "./src/vehicles/parts/screen";

//set terrain size 🗺️
const mappedArea = mapArea(5, 5);

//Initial position 🪂
landRover(mappedArea);
console.log(displayRoverPosition(mappedArea));

//Moving rover 🕹️
moveRover("LMLMLMLMM", mappedArea);
console.log(displayRoverPosition(mappedArea));
