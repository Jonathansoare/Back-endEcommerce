"use strict";

var express = require('express');
var router = express.Router();
var _require = require("../controllers/Pedido/GetOrders"),
  getMonthlySales = _require.getMonthlySales;
var _require2 = require("../controllers/Pedido/GetOrdersDay"),
  getDailySales = _require2.getDailySales;
var _require3 = require("../controllers/Pedido/getHourlySales"),
  getHourlySales = _require3.getHourlySales;
var _require4 = require("../controllers/Pedido/GetMonthlyComparison"),
  getMonthlyComparison = _require4.getMonthlyComparison;
var _require5 = require("../controllers/Pedido/getYearlySalesComparison"),
  getYearlySalesComparison = _require5.getYearlySalesComparison;
router.get('/GetOrders', getMonthlySales);
router.get('/GetOrdersDay', getDailySales);
router.get('/getHourlySales', getHourlySales);
router.get('/GetMonthlyComparison', getMonthlyComparison);
router.get('/GetYearlySalesComparison', getYearlySalesComparison);
var PedidoRouter = router;
module.exports = PedidoRouter;