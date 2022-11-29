const express = require('express');
const router = express.Router();

const ROLES = require("../../data/roles.constants.json");

const postController = require ("../../controllers/post.controller.js");

const postValidators = require ("../../validators/post.validators.js");
const runValidations = require ("../../validators/index.middleware.js");

const { authentication, authorization } = require("../..//middlewares//auth.middlewares");

router.get("/", postController.findALL);

router.get("/:identifier",
    postValidators.findPostByIdValidator,
    runValidations,
    postController.findOneById);

router.post("/",
    authentication,
    authorization(ROLES.USER),
    postValidators.createPostValidator, 
    runValidations, 
    postController.create);

module.exports = router; 