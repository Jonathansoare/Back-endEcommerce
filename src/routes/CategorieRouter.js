const express = require('express');
const router = express.Router();

const {RegisterCategorie} = require("../controllers/Categorie/RegisterCategories")
const {EditCategorie} = require("../controllers/Categorie/EditCategories")
const {DeleteCategorie} = require("../controllers/Categorie/DeleteCategories")
const {getCategorie} = require("../controllers/Categorie/GetCategories")
const {eAdmin} = require('../middlewares/Auth');

router.post('/registerCategorie',RegisterCategorie)
router.put('/editCategorie/:id',eAdmin,EditCategorie)
router.delete('/deleteCategorie/:id',eAdmin,DeleteCategorie)
router.get('/getCategorie',getCategorie)

const categorieRouter = router

module.exports = categorieRouter