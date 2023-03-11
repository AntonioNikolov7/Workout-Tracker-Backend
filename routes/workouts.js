const express = require("express");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();
//GET all workouts
router.get("/", getWorkouts);

//GET a single workouts

router.get("/:id", getWorkout);

//POST a new workout

router.post("/", createWorkout);

//DELETE A WORKOUT

router.delete("/:id", deleteWorkout);

//UPDATE A WORKOUT

router.patch("/:id", updateWorkout);
module.exports = router;
