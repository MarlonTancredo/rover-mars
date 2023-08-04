import {
  landRover,
  updateCoordinate,
  replaceCurrDirectionWithLabel,
  returnLandingPosition,
  getCommand,
  splitCommand,
  clearCurrentIndex,
  checkCommand,
  printCurrentMap,
  reverseMap,
  updateReversedCoordinate,
  returnCurrentPosition,
} from "./rover";

//Landing Rover 🪂
export const landingRover = (x: number, y: number, direction: string) => {
  updateCoordinate(landRover({ x, y, direction }));
  replaceCurrDirectionWithLabel();
  console.clear();
  console.log(returnLandingPosition());
  console.log("Rover landed! ", printCurrentMap());
  return returnLandingPosition();
};

// Moving rover 🕹️
export const movingRover = (command: string) => {
  splitCommand(getCommand(command)).forEach((command, index) => {
    clearCurrentIndex();
    checkCommand(command);
    replaceCurrDirectionWithLabel();
    console.log(`${index}`, printCurrentMap());
  });
  reverseMap();
  updateReversedCoordinate();
  console.log(returnCurrentPosition());
  console.log(`Rover stopped!: `, printCurrentMap());
  replaceCurrDirectionWithLabel();
  return returnCurrentPosition();
};
