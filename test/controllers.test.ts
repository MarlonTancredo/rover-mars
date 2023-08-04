import { mapArea } from "../src/mars/terrain";
import { getMap } from "../src/vehicles/rover/rover";
import { landingRover, movingRover } from "../src/vehicles/rover/controllers";

describe("landingRover()", () => {
  const map = mapArea(5, 5);

  getMap(map);

  const x = 1;
  const y = 2;
  const direction = "N";

  it("should return 1 2 N", () => {
    expect(landingRover(x, y, direction)).toBe("1 2 N");
  });

  it("should return 1 3 N", () => {
    expect(movingRover("LMLMLMLMM")).toBe("1 3 N");
  });

  it("should return 1 3 W", () => {
    expect(movingRover("L")).toBe("1 3 W");
  });

  it("should return 1 3 N", () => {
    expect(movingRover("R")).toBe("1 3 N");
  });

  it("should return 1 3 N", () => {
    expect(movingRover("M")).toBe("1 3 N");
  });
});
