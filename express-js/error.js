const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/profile", (req, res, next) => {
  next(new Error("Something went wrong"));
});

//always at last

app.use((err, req, res, next) => {
  console.log("Error middleware called");
  console.error(err.message);
  res.status(500).send("Something broke!");
});

app.listen(5000, () => {
  console.log("Server started");
});