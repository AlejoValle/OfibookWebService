const express = require('express');
const router = express.Router();

const ROLES = require("../../data/roles.constants.json");

const postController = require ("../../controllers/post.controller.js");

const postValidators = require ("../../validators/post.validators.js");
const runValidations = require ("../../validators/index.middleware.js");

const { authentication, authorization } = require("../..//middlewares//auth.middlewares");

router.get("/", postController.findALL);
router.get("/own", authentication, postController.findOwn);
router.get("/user/:identifier",
    postValidators.findPostByIdValidator,
    runValidations, 
    postController.findPostsByUser
    );
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

    router.patch("/visibility/:identifier",
    authentication,
    authorization(ROLES.USER),
    postValidators.findPostByIdValidator,
    runValidations,
    postController.togglePostVisibility
);

router.patch("/like/:identifier",
    authentication,
    authorization(ROLES.USER),
    postValidators.findPostByIdValidator,
    runValidations,
    postController.togglePostLike
);

router.patch("/save/:identifier",
    authentication,
    authorization(ROLES.USER),
    postValidators.findPostByIdValidator,
    runValidations,
    postController.toggleSavedPost
)

module.exports = router; 