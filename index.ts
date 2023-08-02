import { mapArea } from "./src/mars/terrain";
import { landRover, moveRover } from "./src/vehicles/rover/rover";

//set terrain size 🗺️
const mappedArea = mapArea(5, 5);

//Initial position 🪂
console.log(landRover(mappedArea));

//Moving rover 🕹️
console.log(moveRover("LMLMLMLMM", mappedArea));
