const express = require('express');
const router = express.Router();

const postController = require ("../../controllers/post.controller.js");

const postValidators = require ("../../validators/post.validators.js");
const runValidations = require ("../../validators/index.middleware.js");

router.get("/", postController.findALL);

router.get("/:identifier",
    postValidators.findPostByIdValidator,
    runValidations,
    postController.findOneById);

router.post("/", 
    postValidators.createPostValidator, 
    runValidations, 
    postController.create);

module.exports = router; 