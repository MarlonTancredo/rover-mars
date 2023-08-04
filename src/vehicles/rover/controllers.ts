import {
  splitCommand,
  getCommand,
  clearCurrentIndex,
  checkCommand,
  updateMap,
  printCurrentMap,
  reverseMap,
  returnPosition,
  returnLandingPosition,
  landRover,
  updateCoordinate,
  getReversedMapCoordinate,
} from "./rover";

//Landing Rover 🪂
export const landingRover = (x: number, y: number, direction: string) => {
  updateCoordinate(landRover({ x, y, direction }));
  updateMap();
  console.log(returnLandingPosition());
  console.log("Rover landed! ", printCurrentMap());
  return returnLandingPosition();
};

// Moving rover 🕹️
export const movingRover = (command: string) => {
  splitCommand(getCommand(command)).forEach((command, index) => {
    clearCurrentIndex();
    checkCommand(command);
    updateMap();
    console.log(`${index}`, printCurrentMap());
  });
  reverseMap();
  getReversedMapCoordinate();
  console.log(returnPosition());
  console.log(`Rover stopped!: `, printCurrentMap());
  updateMap();
  return returnPosition();
};
