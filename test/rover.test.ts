import { buildMap } from "../src/mars/map";
import { rover } from "../src/vehicles/rover/rover";

describe("rover() ", () => {
  //Arrange
  const map = buildMap(5, 5);
  const x = 1;
  const y = 2;
  const direction = "N";
  const command = "LMLMLMLMM";

  it("should return 0 1 N", () => {
    //Act Assert
    expect(rover("A", x, y, direction, map, command)).toBe("0 2 N");
  });
});
