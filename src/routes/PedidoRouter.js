const express = require('express');
const router = express.Router();

const {getMonthlySales} = require("../controllers/Pedido/GetOrders")
const {getDailySales} = require("../controllers/Pedido/GetOrdersDay")

router.get('/GetOrders',getMonthlySales)
router.get('/GetOrdersDay',getDailySales)

const PedidoRouter = router

module.exports = PedidoRouter