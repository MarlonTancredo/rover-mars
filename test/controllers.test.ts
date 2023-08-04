import { mapArea } from "../src/mars/terrain";
import { getMap } from "../src/vehicles/rover/rover";
import { landingRover, movingRover } from "../src/vehicles/rover/controllers";

describe("landingRover() ", () => {
  it("should return 1 2 N", () => {
    const map = mapArea(5, 5);
    const x = 1;
    const y = 2;
    const direction = "N";

    getMap(map);

    expect(landingRover(x, y, direction)).toBe("1 2 N");
  });
});

describe("movingRover() calling many movingRover()", () => {
  it("should return 1 3 N", () => {
    const map = mapArea(5, 5);
    const x = 1;
    const y = 2;
    const direction = "N";

    getMap(map);

    landingRover(x, y, direction);

    expect(movingRover("LMLMLMLMM")).toBe("1 3 N");
  });

  it("should return 1 2 W", () => {
    expect(movingRover("L")).toBe("1 3 W");
  });

  it("should return 1 4 W", () => {
    expect(movingRover("M")).toBe("1 4 W");
  });
});

describe("movingRover() calling one movingRover()", () => {
  it("should return 5 1 E", () => {
    const map = mapArea(5, 5);
    const x = 3;
    const y = 3;
    const direction = "E";

    getMap(map);

    landingRover(x, y, direction);

    expect(movingRover("MMRMMRMRRM")).toBe("5 1 E");
  });
});
