const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const hpp = require("hpp");
const bodyParser = require("body-parser");

require("dotenv").config();
const app = express();

app.set("view engine", "ejs");
app.use(morgan());
app.use(helmet());
app.use(hpp());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(localMiddleware);

const MainController = require("./MainController");

app.route("/").get(MainController.index);
app.route("/join").get(MainController.join);

app.listen(process.env.PORT, () => {
  console.log("listening at 3000 port");
});
