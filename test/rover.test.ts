import { buildMap } from "../src/mars/map";
import { rover } from "../src/vehicles/rover/rover";

describe("rover() ", () => {
  //Arrange
  const map = buildMap(5, 5);
  const roverA = {
    name: "A",
    x: 1,
    y: 2,
    direction: "N",
    map: map,
    command: "LMLMLMLMM",
  };
  it("should return 0 1 N", () => {
    //Act Assert
    expect(rover(roverA)).toBe("0 2 N");
  });
});
