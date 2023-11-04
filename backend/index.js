import express from "express";
import cors from "cors";

const app = express();
const port = 3001;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get("/", (req, res) => {
  res.json("Hello from server");
});

app.listen(port, () => {
  console.log(`Server started in ${port}`);
});
