const express = require('express');
const router = express.Router();

const profController = require ("../../controllers/prof.controller.js");

router.get("/", profController.findALL);

router.post("/",
    profController.create);

module.exports = router; 