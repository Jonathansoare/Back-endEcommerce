const express = require('express');
const router = express.Router();

const {cadastrar} = require("../controllers/Products/RegisterProducts");
const {DeleteProducts} = require("../controllers/Products/DeleteProducts")
const {getProductsAll} = require("../controllers/Products/GetProductsAll")
const {EditProducts} = require("../controllers/Products/EditProducts")
const {eAdmin} = require('../middlewares/Auth');

router.post('/RegisterProducts',eAdmin, cadastrar);
router.delete('/deleteProducts/:id',eAdmin, DeleteProducts);
router.get('/getProducts/', getProductsAll);
router.put('/editProducts/:id',eAdmin, EditProducts);

const productsRouter = router

module.exports = productsRouter ;