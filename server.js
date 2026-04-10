require("dotenv").config({ path: require("path").resolve(__dirname, ".env") });
const app = require("./app.js");
const initDB = require("./src/config/initDB.js");

const PORT = process.env.PORT || 5000;

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
