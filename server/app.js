const express = require("express");
const authRoutes = require("./routes/auth.routes");
const db = require("./data/database");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(authRoutes);
db.connectToDatabase()
  .then(function () {
    app.listen(5000);
  })
  .catch(function (error) {
    console.log("Failed to connect the database");
    console.log("Error ");
  });
