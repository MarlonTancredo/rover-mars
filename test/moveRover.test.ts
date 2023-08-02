import { moveRover } from "../src/vehicles/rover/rover";
import { mapArea } from "../src/mars/terrain";

describe("moveRover()", () => {
  const map = mapArea(5, 5);

  it("should return 1 3 N", () => {
    expect(moveRover("LMLMLMLMM", map)).toBe("1 3 N");
  });

  it("should return 1 3 W", () => {
    expect(moveRover("L", map)).toBe("1 3 W");
  });

  it("should return 1 2 E", () => {
    expect(moveRover("RR", map)).toBe("1 3 E");
  });
});
