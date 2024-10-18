const express = require("express");
const app = express();
const path = require("node:path");
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);

app.use((err, req, res, next) => {
  console.error(err);
  // We can now specify the `err.statusCode` that exists in our custom error class and if it does not exist it's probably an internal server error
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
