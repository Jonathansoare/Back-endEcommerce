const express = require('express');
const router = express.Router();

const {login} = require("../controllers/User/LoginUser")
const {cadastrar} = require("../controllers/User/RegisterUser");
const {EditUser} = require("../controllers/User/EditUserController");
const {DeleteUser} = require("../controllers/User/DeleteUserController");
const {eAdmin} = require('../middlewares/Auth');
const { getUserAll } = require('../controllers/User/GetUserAll');
const { getAllInfoUser } = require('../controllers/User/GetAllInfoUser');
const { loginAdmin } = require('../controllers/User/LoginAdmin');
const { validarUsuarioPeloToken } = require('../controllers/User/AuthUser');

router.post('/CadastrarUser', cadastrar);
router.post('/Login', login);
router.post('/LoginAdmin', loginAdmin);
router.post('/AuthUser', eAdmin);
router.post('/AuthenticaUsuario',validarUsuarioPeloToken)
router.put('/EditUser/:id',eAdmin, EditUser);

router.delete('/DeleteUser/:id',eAdmin, DeleteUser);

router.get('/GetUserAll',eAdmin, getUserAll);
router.get('/GetAllInfoUser/:id',eAdmin, getAllInfoUser);


const userRouter = router

module.exports = userRouter ;