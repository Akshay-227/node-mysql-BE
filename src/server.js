import express from "express";
import cors from "cors";
const app = express();
import tutorialRouter from "./routes/tutorial.routes.js";
import db from "./models/index.js";
var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
db.sequelize.sync()
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to esparkinfo application." });
});
app.use('/tutorial', tutorialRouter);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
