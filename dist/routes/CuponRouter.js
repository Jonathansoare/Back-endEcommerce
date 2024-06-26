"use strict";

var express = require('express');
var router = express.Router();
var _require = require("../controllers/Cupon/RegisterCupon"),
  RegisterCupon = _require.RegisterCupon;
var _require2 = require("../controllers/Cupon/GetCupon"),
  getCupon = _require2.getCupon;
var _require3 = require("../controllers/Cupon/EditCupons"),
  EditCupons = _require3.EditCupons;
var _require4 = require("../controllers/Cupon/DeleteCupon"),
  DeleteCupon = _require4.DeleteCupon;
var _require5 = require('../middlewares/Auth'),
  eAdmin = _require5.eAdmin;
router.post('/RegisterCupon', eAdmin, RegisterCupon);
router.get('/GetCupon', getCupon);
router.get('/GetCupon/:id', getCupon);
router.put('/EditCupom/:id', EditCupons);
router["delete"]('/DeleteCupom/:id', DeleteCupon);
var cuponRouter = router;
module.exports = cuponRouter;