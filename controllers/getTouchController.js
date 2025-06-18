const GetTouch = require("../models/getTouch");

const handlePostGetTouch = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newEntryGetTouch = await GetTouch.create({
      name,
      email,
      subject,
      message,
    });
    res.status(200).json({ data: newEntryGetTouch });
  } catch (error) {
    console.log("Error while fetching getTouch Details");
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = {
  handlePostGetTouch,
};
