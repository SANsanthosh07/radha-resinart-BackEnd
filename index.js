const Logger = require("../BackEnd/utils/logger");
const app = require("./app");
const dotenv = require("dotenv");
const chalk = require("chalk");

dotenv.config();

const database = require("./database");
database();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  Logger.info(chalk.bgCyan(` Server Running On ${PORT} `));
  // console.log(`Server Running On ${PORT} `);
});
