const express = require('express');
const router = express.Router();

const {getMonthlySales} = require("../controllers/Pedido/GetOrders")
const {getDailySales} = require("../controllers/Pedido/GetOrdersDay")
const {getHourlySales} = require("../controllers/Pedido/getHourlySales")
const {getMonthlyComparison} = require("../controllers/Pedido/GetMonthlyComparison")
const {getYearlySalesComparison} = require("../controllers/Pedido/getYearlySalesComparison")

router.get('/GetOrders',getMonthlySales)
router.get('/GetOrdersDay',getDailySales)
router.get('/getHourlySales',getHourlySales)
router.get('/GetMonthlyComparison',getMonthlyComparison)
router.get('/GetYearlySalesComparison',getYearlySalesComparison)

const PedidoRouter = router

module.exports = PedidoRouter