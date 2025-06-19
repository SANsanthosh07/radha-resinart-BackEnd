const GetTouch = require("../models/getTouch");
const logger = require("../utils/logger");
const sendMail = require("../utils/sendMail");

const handlePostGetTouch = async (req, res) => {
  try {
    logger.info("Receiving data from new user");
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      logger.warn("Missing required fields");
      return res.status(400).json({ message: "All fields are required" });
    }

    logger.info("All fields present. Storing in MongoDB...");
    const newEntryGetTouch = await GetTouch.create({
      name,
      email,
      subject,
      message,
    });

    logger.info("Data stored in MongoDB successfully");

    const sendMailResult = await sendMail({
      to: ["mahihacker07@gmail.com", "drypointresinart@gmail.com"],
      subject: `New Customer Details & Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
    });

    logger.info("Email sent to site owner");

    return res.status(200).json({
      data: newEntryGetTouch,
      mailStatus: sendMailResult,
      message: "Submitted and emailed successfully.",
    });
  } catch (error) {
    logger.error(`Error while receiving data:`, error);
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};

module.exports = {
  handlePostGetTouch,
};
