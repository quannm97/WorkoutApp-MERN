const express = require("express");
const Workout = require('../models/WorkoutModel');
const { createWorkout, getWorkouts, getWorkout, updateWorkout, deleteWorkout } = require("../controllers/workoutController");

const router = express.Router();

// GET all workouts
router.get("/", getWorkouts);

// GET single workouts
router.get("/:id", getWorkout);

// POST a workouts
router.post("/",createWorkout);

// UPDATE single workouts
router.patch("/:id", updateWorkout);

// DELETE single workouts
router.delete("/:id", deleteWorkout);
module.exports = router;
