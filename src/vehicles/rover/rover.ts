const arrows = {
  northLabel: "⬆️",
  southLabel: "⬇️",
  westLabel: "⬅️",
  eastLabel: "➡️",
};
const { northLabel, southLabel, westLabel, eastLabel } = arrows;

const coordinates = {
  north: "north",
  south: "south",
  west: "west",
  east: "east",
};
const { north, south, west, east } = coordinates;

//🔥 Initial coordinates 🔥
let x = 1;
let y = 2;
let direction = north;

export const landRover = (mappedArea: string[][]) => {
  mappedArea[x][y] = direction;
  return `${x + 1} ${y + 1} ${direction}`;
};

export const moveRover = (command: string, mappedArea: string[][]) => {
  splitCommand(command, mappedArea);
  return `${x + 1} ${y + 1} ${direction}`;
};

const clearPreviousIndex = (mappedArea: string[][]) => {
  mappedArea[x][y] = " ";
};

const splitCommand = (command: string, mappedArea: string[][]) => {
  const commandSplitted = command.split("");
  commandSplitted.forEach((command: string) => {
    clearPreviousIndex(mappedArea);
    checkDirection(command, mappedArea);
  });
  return mappedArea;
};

const checkDirection = (command: string, mappedArea: string[][]) => {
  if (direction === east) {
    if (command === "M" && y === mappedArea[y].length - 1) {
      y = 0;
      direction = east;
      mappedArea[x][y] = eastLabel;
    } else if (command === "M") {
      y = y + 1;
      direction = east;
      mappedArea[x][y] = eastLabel;
    } else if (command === "R") {
      direction = south;
      mappedArea[x][y] = southLabel;
    } else if (command === "L") {
      direction = north;
      mappedArea[x][y] = northLabel;
    }
  }
  //WEST ⬅️
  else if (direction === west) {
    if (command === "M" && y === 0) {
      y = mappedArea.length - 1;
      direction = west;
      mappedArea[x][y] = westLabel;
    } else if (command === "M") {
      y = y - 1;
      direction = west;
      mappedArea[x][y] = westLabel;
    } else if (command === "R") {
      direction = north;
      mappedArea[x][y] = northLabel;
    } else if (command === "L") {
      direction = south;
      mappedArea[x][y] = southLabel;
    }
  }
  //SOUTH ⬇️
  else if (direction === south) {
    if (command === "M" && x === mappedArea.length - 1) {
      x = 0;
      direction = south;
      mappedArea[x][y] = southLabel;
    } else if (command === "M") {
      x = x + 1;
      direction = south;
      mappedArea[x][y] = southLabel;
    } else if (command === "R") {
      direction = west;
      mappedArea[x][y] = westLabel;
    } else if (command === "L") {
      direction = east;
      mappedArea[x][y] = eastLabel;
    }
  }
  //NORTH ⬆️
  else if (direction === north) {
    if (command === "M" && x === 0) {
      x = mappedArea.length - 1;
      direction = north;
      mappedArea[x][y] = northLabel;
    } else if (command === "M") {
      x = x - 1;
      direction = north;
      mappedArea[x][y] = northLabel;
    } else if (command === "R") {
      direction = east;
      mappedArea[x][y] = eastLabel;
    } else if (command === "L") {
      direction = west;
      mappedArea[x][y] = westLabel;
    }
  }
  return mappedArea;
};
