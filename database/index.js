const server = require("./src/server");
const PORT = 8004;

server.listen(PORT, () => {
  console.log(`Database listening on port: ${PORT}`);
});

//const { Character, Film, Planet } = require("./src/database/index");
// Film.list().then((res) => console.log(res[0]));
// Planet.get(1).then((res) => console.log(res));

//Character.get(201).then((res) => console.log(res));
// Character.insert({
//   _id: 201,
//   name: "Cruz Skywalker",
//   birth_year: "1994",
//   films: ["1", "2", "3"],
// }).then((res) => console.log(res));
