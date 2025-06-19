const GetTouch = require("../models/getTouch");
const logger = require("../utils/logger");

const handlePostGetTouch = async (req, res) => {
  try {
    logger.info("Receving data from new user");
    const { name, email, subject, message } = req.body;
    logger.info("Passed all required condition");
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    logger.info("Data stored in MongoDB");
    const newEntryGetTouch = await GetTouch.create({
      name,
      email,
      subject,
      message,
    });
    logger.info("Data received successfully");
    res.status(200).json({ data: newEntryGetTouch });
  } catch (error) {
    logger.error("Error while receving data");
    console.log("Error while fetching getTouch Details");
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = {
  handlePostGetTouch,
};
