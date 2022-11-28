const Mongoose = require("mongoose");

const debug = require("debug")("app:mongoose");

const dbhost = process.env.DBHOST || "localhost";
const dbport = process.env.DBPORT || "21012";
const dbname = process.env.DBNAME || "OfiBookMongodb";

const dburi = process.env.DBURI || `mongodb+srv://admin:BWQio8ivTx9ftkn5@cluster0.qrl3jhz.mongodb.net/?retryWrites=true&w=majority`;

const connect = async () => {
  debug(dburi);
  try {
    await Mongoose.connect(dburi);
    debug("Conexión a la base exitosa");
  } catch (error) {
    debug("Error en la conexión de la base");
    process.exit(1);
  }
}

module.exports = {
  connect
}