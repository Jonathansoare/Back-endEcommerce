"use strict";

var express = require('express');
var router = express.Router();
var _require = require("../controllers/User/LoginUser"),
  login = _require.login;
var _require2 = require("../controllers/User/RegisterUser"),
  cadastrar = _require2.cadastrar;
var _require3 = require("../controllers/User/EditUserController"),
  EditUser = _require3.EditUser;
var _require4 = require("../controllers/User/DeleteUserController"),
  DeleteUser = _require4.DeleteUser;
var _require5 = require('../middlewares/Auth'),
  eAdmin = _require5.eAdmin;
var _require6 = require('../controllers/User/GetUserAll'),
  getUserAll = _require6.getUserAll;
var _require7 = require('../controllers/User/GetAllInfoUser'),
  getAllInfoUser = _require7.getAllInfoUser;
var _require8 = require('../controllers/User/LoginAdmin'),
  loginAdmin = _require8.loginAdmin;
var _require9 = require('../controllers/User/AuthUser'),
  validarUsuarioPeloToken = _require9.validarUsuarioPeloToken;
router.post('/CadastrarUser', cadastrar);
router.post('/Login', login);
router.post('/LoginAdmin', loginAdmin);
router.post('/AuthUser', eAdmin);
router.post('/AuthenticaUsuario', validarUsuarioPeloToken);
router.put('/EditUser/:id', eAdmin, EditUser);
router["delete"]('/DeleteUser/:id', eAdmin, DeleteUser);
router.get('/GetUserAll', eAdmin, getUserAll);
router.get('/GetAllInfoUser/:id', eAdmin, getAllInfoUser);
var userRouter = router;
module.exports = userRouter;