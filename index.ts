import { buildMap } from "./src/mars/map";
import { rover, printRoverPosition } from "./src/vehicles/rover/rover";

//Set map size 🗺️
let map = buildMap(5, 5);

//Rovers
const roverA = {
  name: "A",
  x: 1,
  y: 2,
  direction: "N",
  map: map,
  command: "LMLMLMLMM",
};

const roverB = {
  name: "B",
  x: 3,
  y: 3,
  direction: "E",
  map: map,
  command: "MMRMMRMRRM",
};

const roverC = {
  name: "C",
  x: 2,
  y: 3,
  direction: "W",
  map: map,
  command: "MMR",
};
rover(roverA);
rover(roverB);
rover(roverC);

//Print rover positions
printRoverPosition(map);
