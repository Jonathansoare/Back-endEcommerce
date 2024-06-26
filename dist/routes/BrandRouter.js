"use strict";

var express = require('express');
var router = express.Router();
var _require = require("../controllers/Brands/RegisterBrands"),
  RegisterBrand = _require.RegisterBrand;
var _require2 = require("../controllers/Brands/EditBrands"),
  EditBrands = _require2.EditBrands;
var _require3 = require("../controllers/Brands/DeleteBrands"),
  DeleteBrand = _require3.DeleteBrand;
var _require4 = require("../controllers/Brands/GetBrands"),
  getBrand = _require4.getBrand;
var _require5 = require('../middlewares/Auth'),
  eAdmin = _require5.eAdmin;
router.post('/registerBrand', eAdmin, RegisterBrand);
router.put('/editBrand/:id', eAdmin, EditBrands);
router["delete"]('/deleteBrand/:id', eAdmin, DeleteBrand);
router.get('/getBrand', getBrand);
router.get('/getBrand/:id', getBrand);
var brandRouter = router;
module.exports = brandRouter;