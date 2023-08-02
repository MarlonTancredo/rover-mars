import { landRover } from "../src/vehicles/rover/rover";
import { mapArea } from "../src/mars/terrain";

describe("landRover()", () => {
  const map = mapArea(5, 5);

  it("should return rover position", () => {
    expect(landRover(map)).toBe("2 3 north");
  });
});
