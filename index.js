const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();

const database = require("./database");
database();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server Running On ${PORT} `);
});
