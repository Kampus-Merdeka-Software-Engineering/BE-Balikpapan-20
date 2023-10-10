require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const { lacakRoutes } = require("./routes/lacakRoutes");
const { tarifRoutes } = require("./routes/tarifRoutes");

app.use(cors()); // untuk mengaktifkan cors, agar API dapat di akses dari luar atau FrontEnd
app.use(express.json()); // parse request body dari JSON ke object
app.use(express.urlencoded({ extended: true })); // parse request body dari x-www--form-urlencoded ke object

app.get("/", (req, res) => {
  res.send("hello ojan");
});

// rute untuk lacak/tracking
app.use("/lacak", lacakRoutes);

// rute untuk tarif/Check
app.use("/tarif", tarifRoutes);




app.listen(3000, () => {
  console.log(`Expampel app listening on port 3000`);
});
