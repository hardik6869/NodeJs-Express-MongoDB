const fs = require("fs");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const colors = require("colors");
const dotenv = require("dotenv");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Load Model
const Bootcamp = require("./models/Bootcamp");
mongoose.set("strictQuery", true);

// Read JSON File
const bootcamps = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bootcamps.json`, "utf-8")
);

// Import into DB
const importData = async () => {
  try {
    // Connect to DB
    await mongoose.connect(process.env.MONGO_URI);
    await Bootcamp.create(bootcamps);
    console.log("Data Inserted...".green.inverse);
    process.exit();
  } catch (error) {
    console.error(error);
  }
};

// Delete Data
const deleteData = async () => {
  try {
    // Connect to DB
    await mongoose.connect(process.env.MONGO_URI);
    await Bootcamp.deleteMany();
    console.log("Data Destroyed...".red.inverse);
    process.exit();
  } catch (error) {
    console.error(error);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
