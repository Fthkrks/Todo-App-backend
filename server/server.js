const express = require("express"); // common js ile yaptık import ile yapmadık
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const mainRoute = require("./routes/index");
const cors = require("cors");
const chalk = require("chalk");
const logger = require("morgan");
const app = express();
const port = 5000;

dotenv.config();


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(chalk.bgGreen("Connected to mongoDB"));
  } catch (error) {
    console.log(chalk.bgRed("Can't connected mongoDB"));
    throw error;
  }
};


// middlewares



app.use(cors());
app.use(express.json());
app.use(logger("dev"));
app.use("/api", mainRoute);





app.listen(port, () => {
    connect();
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
