const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const hpp = require("hpp");
const bodyParser = require("body-parser");
const sequelize = require("./models").sequelize;
const passport = require("passport");
const passportConfig = require("./passport");
const router = express.Router();
require("dotenv").config();
const app = express();
sequelize.sync();
//passportConfig(passport);

app.set("view engine", "ejs");
app.use(morgan());
app.use(helmet());
app.use(hpp());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(localMiddleware);
app.use(express.static("public"));

const { isLoggedIn, isNotLoggedIn } = require("./routes/middlewares");

const MainController = require("./MainController");

app.route("/").get(MainController.index);
app.route("/join").get(MainController.join);
app.route("/join").post(MainController.postJoin);
app.route("/mypage").get(MainController.mypage);

app.listen(process.env.PORT, () => {
  console.log("listening at 3000 port");
});
