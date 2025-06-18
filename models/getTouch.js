const mongoose = require("mongoose");

const getTouchSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    subject: { type: String },
    message: { type: String },
  },
  {
    collection: "GetTouchs",
    timestamps: true,
  }
);
module.exports = mongoose.model("GetTouch", getTouchSchema);
