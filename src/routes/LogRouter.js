const express = require('express');
const router = express.Router();

const {GetLogs} = require("../controllers/Logs/GetLogs")

router.get('/GetLogs',GetLogs)

const LogsRouter = router

module.exports = LogsRouter