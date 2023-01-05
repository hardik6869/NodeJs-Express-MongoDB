const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");

// Load env vars
dotenv.config({ path: "./config/config.env" });

//Connect to Database
connectDB();

// Route Files
const bootcamps = require("./routes/bootcamps");

const app = express();

// Dev LOgging Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount Routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5200;
const server = app.listen(
  PORT,
  console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Handle Unhandle promise rejections
process.on("unhandleRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
