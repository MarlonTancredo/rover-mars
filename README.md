##

🗺️ Instructions:

👉 Use `npm install` on the terminal to install all the dependencies.

👉 Use `npm start` on the terminal to start the project.

🧪 Make the tests using `npm test` or `npm run test:watch`.

##

👨‍💻 `index.ts`

```TypeScript
landRover(mappedArea); //Landing the rover 🪂

moveRover("L", mappedArea); //Move the rover to left. 🕹️

moveRover("R", mappedArea); //Move the rover to the right. 🕹️

moveRover("M", mappedArea); //Move the rover to the direction where the rover is pointed. 🕹️

console.log(displayRoverPosition(mappedArea)); //Display the rover in the final position. 📺

```

##

🚀 `rover.ts`

```TypeScript
let x = 1; //Set x value for landRover()
let y = 2; //Set y value for landRover()
let direction = north; //Set the direction value for landRover()
```
