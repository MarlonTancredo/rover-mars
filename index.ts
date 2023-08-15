import { buildMap } from "./src/mars/map";
import { rover, printRoverPosition } from "./src/vehicles/rover/rover";

//Set map size 🗺️
let map = buildMap(5, 5);

//Rovers
rover("A", 1, 2, "N", map, "LMLMLMLMM");
rover("B", 3, 3, "E", map, "MMRMMRMRRM");
rover("C", 2, 3, "W", map, "MMR");

//Print rover positions
printRoverPosition(map);
