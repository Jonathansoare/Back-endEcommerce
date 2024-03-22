const express = require('express');
const router = express.Router();

const {RegisterFavorite} = require("../controllers/Favorite/RegisterFavorite");
const {DeleteFavorite} = require("../controllers/Favorite/deleteFavorite")
const {GetFavorite} = require("../controllers/Favorite/GetFavorite")



router.post('/RegisterFavorite', RegisterFavorite);
router.delete('/DeleteFavorite/:id', DeleteFavorite);
router.get('/GetFavorite/:id', GetFavorite);
router.get('/GetFavorite', GetFavorite);

const Favorite = router

module.exports = Favorite ;