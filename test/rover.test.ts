import { landRover, moveRover } from "../src/vehicles/rover/rover";
import { mapArea } from "../src/mars/terrain";

describe("landRover()", () => {
  const map = mapArea(5, 5);

  const arrayReturned = [
    [" ", " ", " ", " ", " "],
    [" ", " ", "⬆️", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
  ];

  it("should return the area mapped with the rover landed", () => {
    expect(landRover(map)).toStrictEqual(arrayReturned);
  });
});

describe("moveRover()", () => {
  const map = mapArea(5, 5);
  const roverLandedMap = landRover(map);

  const mapReturned = [
    [" ", " ", "⬆️", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
  ];
  it("should return the area with rover and the rover path", () => {
    expect(moveRover("LMLMLMLMM", roverLandedMap)).toStrictEqual(mapReturned);
  });
});
