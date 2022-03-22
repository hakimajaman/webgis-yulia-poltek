require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const viewRoutes = require("./app/views-routes/index");
const apiRoutes = require("./api/routes/index");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "app/views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/**
 *
 *  custom setup is here
 *
 */
// open custom setup
// static setup
app.use("/dist", express.static(__dirname + "/app/assets/dist"));

// router
app.use("/", viewRoutes);
app.use("/api", apiRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// closed custom setup
/**
 *
 *
 */

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(process.env.PORT, () => {
  console.log(`MVC app listening at port:${process.env.PORT}`);
});

module.exports = app;
