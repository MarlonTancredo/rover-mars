import { displayRoverPosition } from "../src/vehicles/parts/screen";
import { mapArea } from "../src/mars/terrain";
import { landRover, moveRover } from "../src/vehicles/rover/rover";

describe("displayRoverPosition()", () => {
  test("should return an array[][] with the rover position landed", () => {
    const returnedArray = [
      [" ", " ", " ", " ", " "],
      [" ", " ", "N", " ", " "],
      [" ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " "],
    ];

    const map = mapArea(5, 5);
    landRover(map);

    expect(displayRoverPosition(map)).toStrictEqual(returnedArray);
  });

  test("should return an array[][] with the rover position moved", () => {
    const returnedArray = [
      [" ", " ", " ", " ", " "],
      [" ", " ", "⬅️", " ", " "],
      [" ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " "],
    ];
    const map = mapArea(5, 5);
    landRover(map);
    moveRover("L", map);
    expect(displayRoverPosition(map)).toStrictEqual(returnedArray);
  });
});
