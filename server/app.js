const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const notesRouter = require("./routes/notes");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/notes", notesRouter);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Send JSON response for API errors
  res.status(err.status || 500).json({
    error: {
      message: err.message,
    },
  });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
