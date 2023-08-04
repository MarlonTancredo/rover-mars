##

🗺️ Instructions:

👉 Use `npm install` on the terminal to install all the dependencies.

👉 Use `npm start` on the terminal to start the project.

🧪 Make the tests using `npm test` or `npm run test:watch`.

##

👨‍💻 `index.ts`

```TypeScript
//set map size 🗺️
let mappedArea = mapArea(5, 5); //Set map with different sizes.

//Initial coordinate
const x = 1;
const y = 2;
const direction = "N";

//Passing map to rover
getMap(mappedArea);

landingRover(x, y, direction); //Landing the rover 🪂

movingRover("LMLMLMLMM");

movingRover("L"); //turn the rover to left. 🕹️

movingRover("R");  //Turn the rover to the right. 🕹️

movingRover("M"); //Move the rover to the direction where the rover is pointed. 🕹️
```
