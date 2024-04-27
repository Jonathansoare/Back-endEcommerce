const express = require('express');
const router = express.Router();

const {RegisterCupon} = require("../controllers/Cupon/RegisterCupon");
const {getCupon} = require("../controllers/Cupon/GetCupon");
const {EditCupons} = require("../controllers/Cupon/EditCupons");
const {DeleteCupon} = require("../controllers/Cupon/DeleteCupon");
const { eAdmin } = require('../middlewares/Auth');


router.post('/RegisterCupon',eAdmin,RegisterCupon)
router.get('/GetCupon',getCupon)
router.get('/GetCupon/:id',getCupon)
router.put('/EditCupom/:id',EditCupons)
router.delete('/DeleteCupom/:id',DeleteCupon)

const cuponRouter = router

module.exports = cuponRouter