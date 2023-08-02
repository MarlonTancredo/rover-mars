import { moveRover } from "../src/vehicles/rover/rover";
import { mapArea } from "../src/mars/terrain";

describe("moveRover()", () => {
  const map = mapArea(5, 5);

  it("should return the rover position", () => {
    expect(moveRover("LMLMLMLMM", map)).toBe("1 3 north");
  });

  it("should return position to west", () => {
    expect(moveRover("L", map)).toBe("1 3 west");
  });

  it("should return position to east", () => {
    expect(moveRover("RR", map)).toBe("1 3 east");
  });
});
