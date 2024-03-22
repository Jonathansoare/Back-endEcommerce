"use strict";

var express = require('express');
var router = express.Router();
var _require = require("../controllers/Cupon/RegisterCupon"),
  RegisterCupon = _require.RegisterCupon;
var _require2 = require("../controllers/Cupon/GetCupon"),
  getCupon = _require2.getCupon;
var _require3 = require('../middlewares/Auth'),
  eAdmin = _require3.eAdmin;
router.post('/RegisterCupon', eAdmin, RegisterCupon);
router.get('/GetCupon', getCupon);
var cuponRouter = router;
module.exports = cuponRouter;