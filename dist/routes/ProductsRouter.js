"use strict";

var express = require('express');
var router = express.Router();
var _require = require("../controllers/Products/RegisterProducts"),
  cadastrar = _require.cadastrar;
var _require2 = require("../controllers/Products/DeleteProducts"),
  DeleteProducts = _require2.DeleteProducts;
var _require3 = require("../controllers/Products/GetProductsAll"),
  getProductsAll = _require3.getProductsAll;
var _require4 = require("../controllers/Products/EditProducts"),
  EditProducts = _require4.EditProducts;
var _require5 = require('../middlewares/Auth'),
  eAdmin = _require5.eAdmin;
router.post('/RegisterProducts', eAdmin, cadastrar);
router["delete"]('/deleteProducts/:id', eAdmin, DeleteProducts);
router.get('/getProducts/', getProductsAll);
router.put('/editProducts/:id', eAdmin, EditProducts);
var productsRouter = router;
module.exports = productsRouter;