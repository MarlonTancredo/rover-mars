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
} from "./rover";

//Landing Rover 🪂
export const landingRover = (x: number, y: number, direction: string) => {
  updateCoordinate(landRover({ x, y, direction }));
  updateMap();
  console.log("Rover landed! ", printCurrentMap());
  console.log(returnLandingPosition());
  return returnLandingPosition();
};

// Moving rover 🕹️
export const movingRover = (command: string) => {
  splitCommand(getCommand(command)).forEach((command, index) => {
    clearCurrentIndex();
    checkCommand(command);
    updateMap();
    console.log(`${index + 1}`, printCurrentMap());
  });
  reverseMap();
  console.log(`Rover stopped!: `, printCurrentMap());
  console.log(returnPosition());
  return returnPosition();
};
