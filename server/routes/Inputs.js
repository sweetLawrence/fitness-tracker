const express = require("express");
const router = express.Router();
const { Inputs } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");


router.get("/", validateToken, async (req, res) => {
    const userId = req.user.id; // Get the user ID from req.user
  
    try {
      // Fetch all input data associated with the user ID
      const inputData = await Inputs.findAll({
        where: { userId },
      });
  
      res.json(inputData);
    } catch (err) {
      console.error("Error fetching input data:", err);
      res.status(500).json({ error: "Error fetching input data" });
    }
  });
  

router.post('/', validateToken, async (req, res) => {
    // const { target, achieved,timeTaken,exerciseId }  = req.body;
    const input = req.body;
    // const username = req.user.username;
    // const userId = req.user.username;
    input.inputsData.userId = req.user.id;
    // input.userId = 3;
    console.log(input.inputsData)
   
    await Inputs.create(input.inputsData);
    // res.json(input);

})



module.exports = router