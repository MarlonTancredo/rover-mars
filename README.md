##

🗺️ Instructions:

👉 Use `npm install` on the terminal to install all the dependencies.

👉 Use `npm start` on the terminal to start the project.

🧪 Make the tests using `npm test` or `npm run test:watch`.

##

👨‍💻 `index.ts`

```TypeScript
//set map size 🗺️
let map = buildMap(5, 5);

//Rovers 🕹️
rover("A", 1, 2, "N", map, "LMLMLMLMM");
rover("B", 3, 3, "E", map, "MMRMMRMRRM");
rover("C", 2, 3, "W", map, "MMR");

//Print rover positions
printRoverPosition(map);

```
