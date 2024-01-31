const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/users.route");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

// User Route
app.use("/users", userRouter);
// Home Route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
// Wrong Route
app.use("*", (req, res) => {
  res.sendFile(__dirname + "/views/error.html");
});
// Server Error
app.use((err, req, res, next) =>
  res.status(500).json({ message: "Internal Server Error" })
);

module.exports = app;
