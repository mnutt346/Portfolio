const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const App = express();

App.use(cors());
App.use(bodyParser.urlencoded({ extended: true }));
App.use(express.static(path.join(__dirname, "../dist")));

const port = 3000;

App.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
