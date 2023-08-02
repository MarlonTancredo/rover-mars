import { landRover } from "../src/vehicles/rover/rover";
import { mapArea } from "../src/mars/terrain";

describe("landRover()", () => {
  const map = mapArea(5, 5);

  it("should return rover index + 1 and the direction", () => {
    expect(landRover(map)).toBe("2 3 N");
  });
});
