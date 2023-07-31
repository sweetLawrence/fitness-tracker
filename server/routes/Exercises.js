const express = require("express");
const router = express.Router();
const { Exercises} = require("../models");



router.post('/', async (req, res) => {

    const input = req.body;
    await Exercises.create(input);
    res.json(input);

})



module.exports = router