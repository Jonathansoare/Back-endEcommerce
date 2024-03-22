const express = require('express');
const router = express.Router();

const {RegisterShoppingCart} = require("../controllers/ShoppingCart/RegisterShoppingCart")
const {DeleteShoppingCart} = require("../controllers/ShoppingCart/DeleteShoppingCart")
const {EditShoppingCart} = require("../controllers/ShoppingCart/EditShoppingCart")
const {CleanShoppingCart} = require("../controllers/ShoppingCart/CleanShoppingCart")
const {GetShoppingCart} = require("../controllers/ShoppingCart/GetShoppingCart")


router.post('/RegisterShoppingCart', RegisterShoppingCart);
router.get('/GetShoppingCart/:id', GetShoppingCart);
router.get('/GetShoppingCart', GetShoppingCart);
router.delete('/DeleteShoppingCart/:id', DeleteShoppingCart);
router.delete('/CleanShoppingCart', CleanShoppingCart);
router.put('/EditShoppingCart/:id', EditShoppingCart);

const ShoppingCart = router

module.exports = ShoppingCart ;