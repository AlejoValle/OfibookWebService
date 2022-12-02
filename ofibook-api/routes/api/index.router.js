const express = require("express");
const router = express.Router();

//importar todos los enrutadores
const postRouter = require("./post.router");
const authRouter = require("./auth.router");
const prfRouter = require("./prof.router");

//Definir las rutas
router.use("/auth", authRouter);
router.use("/post", postRouter);
router.use("/prof", prfRouter);

module.exports = router;