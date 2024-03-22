"use strict";

var express = require('express');
var router = express.Router();
var _require = require("../controllers/Favorite/RegisterFavorite"),
  RegisterFavorite = _require.RegisterFavorite;
var _require2 = require("../controllers/Favorite/deleteFavorite"),
  DeleteFavorite = _require2.DeleteFavorite;
var _require3 = require("../controllers/Favorite/GetFavorite"),
  GetFavorite = _require3.GetFavorite;
router.post('/RegisterFavorite', RegisterFavorite);
router["delete"]('/DeleteFavorite/:id', DeleteFavorite);
router.get('/GetFavorite/:id', GetFavorite);
router.get('/GetFavorite', GetFavorite);
var Favorite = router;
module.exports = Favorite;