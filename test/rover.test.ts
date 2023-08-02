import { landRover } from "../src/vehicles/rover/rover";

describe("test the returns of landRover function", () => {
  const map = [
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
  ];

  const arrayReturned = [
    [" ", " ", " ", " ", " "],
    [" ", " ", "⬆️", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
  ];

  test("should return the area mapped with the rover landed", () => {
    expect(landRover(map)).toStrictEqual(arrayReturned);
  });
});
