const express = require("express");
const router = express.Router();
const { Exercises} = require("../models");



const insertPredefinedExercises = async () => {
    const predefinedExercises = [
        { name: "push-ups" },
        { name: "pull-ups" },
        { name: "squats" },
        { name: "running" },
        { name: "cycling" },
        { name: "swimming" },
    ];

    await Exercises.bulkCreate(predefinedExercises);
};

module.exports = insertPredefinedExercises;