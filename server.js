require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutsRoutes = require("./routes/workouts");
//express app
const app = express();
//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//routes
app.use("/api/workouts", workoutsRoutes);
const port = process.env.PORT;
//connect to DB
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`listening on port 4000`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

//listen for requests
