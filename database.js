const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    });
    console.log("MongoDb Connected Successfully");
  } catch (error) {
    console.error("Error in Db Connection", error);
  }
};
module.exports = connectDb;
