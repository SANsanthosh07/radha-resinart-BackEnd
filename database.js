const mongoose = require("mongoose");
const logger = require("./utils/logger");
const chalk = require("chalk");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info(chalk.bgGreenBright(`MongoDb Connected Successfully`));
    // console.log("MongoDb Connected Successfully");
  } catch (error) {
    console.error("Error in Db Connection", error);
  }
};
module.exports = connectDb;
