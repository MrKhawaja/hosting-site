const express = require("express");
var user = require("./routes/user");
const { mongoPass, mongoUser } = require("./config.json");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 2000;

app.use(cors());
app.use(bodyParser.json({ extended: true }));

app.use("/user", user);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
