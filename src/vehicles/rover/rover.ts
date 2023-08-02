const arrows = {
  north: "⬆️",
  south: "⬇️",
  west: "⬅️",
  east: "➡️",
};
const { north, south, west, east } = arrows;

//🔥 Initial coordinates 🔥
let x = 1;
let y = 2;
let direction = north;

export const landRover = (mappedArea: string[][]) => {
  mappedArea[x][y] = direction;
  return mappedArea;
};
