"use strict";

var express = require('express');
var router = express.Router();
var _require = require("../controllers/Categorie/RegisterCategories"),
  RegisterCategorie = _require.RegisterCategorie;
var _require2 = require("../controllers/Categorie/EditCategories"),
  EditCategorie = _require2.EditCategorie;
var _require3 = require("../controllers/Categorie/DeleteCategories"),
  DeleteCategorie = _require3.DeleteCategorie;
var _require4 = require("../controllers/Categorie/GetCategories"),
  getCategorie = _require4.getCategorie;
var _require5 = require('../middlewares/Auth'),
  eAdmin = _require5.eAdmin;
router.post('/registerCategorie', RegisterCategorie);
router.put('/editCategorie/:id', eAdmin, EditCategorie);
router["delete"]('/deleteCategorie/:id', eAdmin, DeleteCategorie);
router.get('/getCategorie', getCategorie);
router.get('/getCategorie/:id', getCategorie);
var categorieRouter = router;
module.exports = categorieRouter;