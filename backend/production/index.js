const express = require("express");
const user = require("./routes/user");
const { mongoPass, mongoUser } = require("./config.json");
const bodyParser = require("body-parser");
const fs = require("fs");
const https = require("https");
var options = {
  key: fs.readFileSync("/etc/letsencrypt/live/web.alveehawak.xyz/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/web.alveehawak.xyz/cert.pem"),
  ca: fs.readFileSync("/etc/letsencrypt/live/web.alveehawak.xyz/chain.pem"),
};
const cors = require("cors");
const app = express();
const port = 2000;

app.use(cors({ origin: "https://pixeledgehosting.com" }));
app.use(bodyParser.json({ extended: true }));

app.use("/user", user);

https.createServer(options, app).listen(port);
