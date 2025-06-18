const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();

const database = require("./database");
database();

const PORT = process.env.PORT || 8000;

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Good" });
});

app.listen(PORT, () => {
  console.log(`Server Running On ${PORT} `);
});
