// dbConnection.js
const MongoClient = require("mongodb").MongoClient;
const env = process.env.NODE_ENV || "development";
// const mongoDbUrl = require("../config/mongodb.json")[env];
let client;

module.exports = async () => {
  // this gives you client
  // Mongoclient.connect returns promise if no callback is passed
  try {
    client = await MongoClient.connect(
      "mongodb://localhost:27017/sampleDB?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
  } catch (e) {
    console.log("Could not connect to mongodb");
  }
};

module.exports.get = () => client;

module.exports.close = () => client.close();
