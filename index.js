const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();

const getTouchs = require("./routes/getTouchRoute");

dotenv.config();

const database = require("./database");
database();

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Good" });
});

app.use(
  cors({
    origin: process.env.APPLICATION_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json({ limit: "4mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/v1/", getTouchs);
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server Running On ${PORT} `);
});
