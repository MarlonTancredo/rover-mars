type Coordinates = {
  x: number;
  y: number;
  direction: string;
};

type CurrentCoordinates = {
  currentX: number;
  currentY: number;
  currentDirection: string;
  currentMap: string[][];
};

const arrows = {
  northLabel: "⬆️",
  southLabel: "⬇️",
  westLabel: "⬅️",
  eastLabel: "➡️",
};
const { northLabel, southLabel, westLabel, eastLabel } = arrows;

const coordinates = {
  north: "N",
  south: "S",
  west: "W",
  east: "E",
};
const { north, south, west, east } = coordinates;

const currCoordinates: CurrentCoordinates = {
  currentX: 0,
  currentY: 0,
  currentDirection: "",
  currentMap: [],
};
let { currentX, currentY, currentDirection, currentMap } = currCoordinates;

export const returnPosition = () => {
  return `${currentX + 1} ${currentY + 1} ${currentDirection}`;
};

export const returnLandingPosition = () => {
  return `${currentX} ${currentY} ${currentDirection}`;
};

export const reverseMap = () => {
  return currentMap.forEach((array) => {
    array.reverse();
  });
};

export const printCurrentMap = () => {
  return currentMap;
};

export const landRover = ({ x, y, direction }: Coordinates) => {
  return { x, y, direction };
};

export const getMap = (map: string[][]) => {
  currentMap = map;
};

export const clearCurrentIndex = (): void => {
  currentMap[currentX][currentY] = " ";
};

export const updateMap = () => {
  switch (currentDirection) {
    case "N":
      return (currentMap[currentX][currentY] = northLabel);
    case "S":
      return (currentMap[currentX][currentY] = southLabel);
    case "W":
      return (currentMap[currentX][currentY] = westLabel);
    case "E":
      return (currentMap[currentX][currentY] = eastLabel);
  }
};

export const updateCoordinate = ({ x, y, direction }: Coordinates) => {
  currentX = x;
  currentY = y;
  currentDirection = direction;
};

export const getCommand = (command: string) => {
  return command;
};

export const splitCommand = (command: string) => {
  return command.split("");
};

export const checkCommand = (command: string) => {
  if (currentDirection === east) {
    //check the edge
    if (command === "M" && currentY === currentMap[currentY].length - 1) {
      console.log("You reach the edge limit!");
      currentY = currentY;
      currentDirection = east;
    } else if (command === "M") {
      currentY = currentY + 1;
      currentDirection = east;
    } else if (command === "R") {
      currentDirection = south;
    } else if (command === "L") {
      currentDirection = north;
    }
  }
  //WEST ⬅️
  else if (currentDirection === west) {
    //check the edge
    if (command === "M" && currentY === 0) {
      console.log("You reach the edge limit!");
      currentY = currentY;
      currentDirection = west;
    } else if (command === "M") {
      currentY = currentY - 1;
      currentDirection = west;
    } else if (command === "R") {
      currentDirection = north;
    } else if (command === "L") {
      currentDirection = south;
    }
  }
  //SOUTH ⬇️
  else if (currentDirection === south) {
    //check the edge
    if (command === "M" && currentX === currentMap.length - 1) {
      console.log("You reach the edge limit!");
      currentX = currentX;
      currentDirection = south;
    } else if (command === "M") {
      currentX = currentX + 1;
      currentDirection = south;
    } else if (command === "R") {
      currentDirection = west;
    } else if (command === "L") {
      currentDirection = east;
    }
  }
  //NORTH ⬆️
  else if (currentDirection === north) {
    //check the edge
    if (command === "M" && currentX === 0) {
      console.log("You reach the edge limit!");
      currentX = currentX;
      currentDirection = north;
    } else if (command === "M") {
      currentX = currentX - 1;
      currentDirection = north;
    } else if (command === "R") {
      currentDirection = east;
    } else if (command === "L") {
      currentDirection = west;
    }
  }
};
