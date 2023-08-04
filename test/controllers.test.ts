import { mapArea } from "../src/mars/terrain";
import { getMap } from "../src/vehicles/roverA/rover";
import { landingRover, movingRover } from "../src/vehicles/roverA/controllers";

describe("landingRover() ", () => {
  //Arrange
  const map = mapArea(5, 5);
  const x = 1;
  const y = 2;
  const direction = "N";

  it("should return 1 2 N", () => {
    //Act
    getMap(map);
    //Assert
    expect(landingRover(x, y, direction)).toBe("1 2 N");
  });
});

describe("movingRover() calling many movingRover()", () => {
  //Arrange
  const map = mapArea(5, 5);
  const x = 1;
  const y = 2;
  const direction = "N";

  it("should return 1 3 N", () => {
    //Act
    getMap(map);
    landingRover(x, y, direction);

    //Assert
    expect(movingRover("LMLMLMLMM")).toBe("1 3 N");
  });

  //Arrange Act Assert
  it("should return 1 2 W", () => {
    expect(movingRover("L")).toBe("1 3 W");
  });

  //Arrange Act Assert
  it("should return 1 4 W", () => {
    expect(movingRover("M")).toBe("1 4 W");
  });
});

describe("movingRover() calling one movingRover()", () => {
  //Arrange
  const map = mapArea(5, 5);
  const x = 3;
  const y = 3;
  const direction = "E";

  it("should return 5 1 E", () => {
    //Act
    getMap(map);
    landingRover(x, y, direction);

    //Assert
    expect(movingRover("MMRMMRMRRM")).toBe("5 1 E");
  });
});
