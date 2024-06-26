"use strict";

var express = require('express');
var router = express.Router();
var _require = require("../controllers/Logs/GetLogs"),
  GetLogs = _require.GetLogs;
router.get('/GetLogs', GetLogs);
var LogsRouter = router;
module.exports = LogsRouter;