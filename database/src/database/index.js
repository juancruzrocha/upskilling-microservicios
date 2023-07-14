const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs");

const conn = mongoose.createConnection(MONGO_URI); //MONGO_URI almacena la URI de conexión a la base de datos MongoDB.

module.exports = {
  Character: conn.model("Character", require("./schemas/characterSchema")),
  Film: conn.model("Film", require("./schemas/filmSchema")),
  Planet: conn.model("Planet", require("./schemas/planetSchema")),
};

// INFO DE COMO SE PUEDEN DEFINIR LOS MODELOS
// Y DE COMO SE PUEDEN HACER CONSULTAS
//------------------------------------------------------------------------------------------------------------------

//define un modelo llamado "Character" utilizando la conexión conn y el esquema definido en el archivo "./schemas/characterSchema".
// const Character = conn.model("Character", require("./schemas/characterSchema"));
// const Film = conn.model("Film", require("./schemas/filmSchema"));
// const Planet = conn.model("Planet", require("./schemas/planetSchema"));

//el método find del modelo "Character" busca todos los documentos en la colección "Character" de la base de datos.
// el método populate() obtiene los documentos relacionados en la colección "Film" utilizando la referencia almacenada en el campo "films".
// Character.find()
//   .populate("films", ["_id", "title"])
//   .then((res) => console.log(res[1]));

//Film.find().then((res) => console.log(res));

// Planet.find()
//   .populate("residents", ["_id", "name"])
//   .then((res) => console.log(res[0]));
