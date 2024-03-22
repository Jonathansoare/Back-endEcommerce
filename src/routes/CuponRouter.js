const express = require('express');
const router = express.Router();

const {RegisterCupon} = require("../controllers/Cupon/RegisterCupon");
const {getCupon} = require("../controllers/Cupon/GetCupon");
const { eAdmin } = require('../middlewares/Auth');


router.post('/RegisterCupon',eAdmin,RegisterCupon)
router.get('/GetCupon',getCupon)

const cuponRouter = router

module.exports = cuponRouter