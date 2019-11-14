const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const hpp = require("hpp");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.set("view engine", "ejs");
app.use(morgan());
app.use(helmet());
app.use(hpp());

const MainController = require("./MainController");

app.route("/").get(MainController.index);

app.listen("3000", () => {
  console.log("listening at 3000 port");
});
