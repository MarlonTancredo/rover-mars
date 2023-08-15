import { buildMap } from "./src/mars/map";
import { rover, printRoverPosition } from "./src/vehicles/rover/rover";

class Rovers {
  name: string;
  x: number;
  y: number;
  direction: string;
  map: string[][];
  command: string;
  constructor(
    name: string,
    x: number,
    y: number,
    direction: string,
    map: string[][],
    command: string
  ) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.map = map;
    this.command = command;
  }
}

//Set map size 🗺️
let map = buildMap(5, 5);

//Rovers
const roverA = new Rovers("A", 1, 2, "N", map, "LMLMLMLMM");
const roverB = new Rovers("B", 3, 3, "E", map, "MMRMMRMRRM");
const roverC = new Rovers("C", 2, 3, "W", map, "MMR");

rover(roverA);
rover(roverB);
rover(roverC);

//Print rover positions
printRoverPosition(map);
