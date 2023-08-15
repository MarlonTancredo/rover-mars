type Rover = {
  name: string;
  x: number;
  y: number;
  direction: string;
  map: string[][];
  command: string;
};

type Arrows = {
  [key: string]: string;
};

const arrows: Arrows = {
  W: "⬅️",
  E: "➡️",
  N: "⬆️",
  S: "⬇️",
};

type Directions = {
  [key: string]: { [key: string]: string };
};

const directions: Directions = {
  W: { R: "N", L: "S" },
  E: { R: "S", L: "N" },
  N: { R: "E", L: "W" },
  S: { R: "W", L: "E" },
};

const clearPreviousIndex = (x: number, y: number, map: string[][]) => {
  map[x][y] = "---";
};

export const rover = ({ name, x, y, direction, map, command }: Rover) => {
  const moveRover = () => {
    switch (direction) {
      case "W":
        return y === 0 ? (y = y) : (y = y - 1);
      case "E":
        return y === map[y].length - 1 ? (y = y) : (y = y + 1);
      case "N":
        return x === 0 ? (x = x) : (x = x - 1);
      case "S":
        return x === map[x].length - 1 ? (x = x) : (x = x + 1);
    }
  };

  for (let i = 0; i < command.split("").length; i++) {
    clearPreviousIndex(x, y, map);
    command[i] === "M"
      ? moveRover()
      : (direction = directions[direction][command[i]]);
    map[x][y] = `${name} ${arrows[direction]}`;
  }

  console.log(name);
  return `${x} ${y} ${direction}`;
};

export const printRoverPosition = (map: string[][]) => {
  console.log(map.reverse());
};
