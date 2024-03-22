"use strict";

var express = require('express');
var router = express.Router();
var _require = require("../controllers/ShoppingCart/RegisterShoppingCart"),
  RegisterShoppingCart = _require.RegisterShoppingCart;
var _require2 = require("../controllers/ShoppingCart/DeleteShoppingCart"),
  DeleteShoppingCart = _require2.DeleteShoppingCart;
var _require3 = require("../controllers/ShoppingCart/EditShoppingCart"),
  EditShoppingCart = _require3.EditShoppingCart;
var _require4 = require("../controllers/ShoppingCart/CleanShoppingCart"),
  CleanShoppingCart = _require4.CleanShoppingCart;
var _require5 = require("../controllers/ShoppingCart/GetShoppingCart"),
  GetShoppingCart = _require5.GetShoppingCart;
router.post('/RegisterShoppingCart', RegisterShoppingCart);
router.get('/GetShoppingCart/:id', GetShoppingCart);
router.get('/GetShoppingCart', GetShoppingCart);
router["delete"]('/DeleteShoppingCart/:id', DeleteShoppingCart);
router["delete"]('/CleanShoppingCart', CleanShoppingCart);
router.put('/EditShoppingCart/:id', EditShoppingCart);
var ShoppingCart = router;
module.exports = ShoppingCart;