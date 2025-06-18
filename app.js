const express = require("express");
const cors = require("cors");
const app = express();

const getTouchs = require("./routes/getTouchRoute");

app.use(
  cors({
    origin: process.env.APPLICATION_URL,
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
  })
);

app.use(express.json({ limit: "4mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/v1/", getTouchs);

module.exports = app;
