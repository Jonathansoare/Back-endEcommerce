const express = require('express');
const router = express.Router();

const {RegisterBrand} = require("../controllers/Brands/RegisterBrands")
const {EditBrands} = require("../controllers/Brands/EditBrands")
const {DeleteBrand} = require("../controllers/Brands/DeleteBrands")
const {getBrand} = require("../controllers/Brands/GetBrands")
const {eAdmin} = require('../middlewares/Auth');

router.post('/registerBrand',eAdmin,RegisterBrand)
router.put('/editBrand/:id',eAdmin,EditBrands)
router.delete('/deleteBrand/:id',eAdmin,DeleteBrand)
router.get('/getBrand',getBrand)
router.get('/getBrand/:id',getBrand)

const brandRouter = router

module.exports = brandRouter