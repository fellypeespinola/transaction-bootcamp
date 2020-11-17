const express = require('express');
const transactionRouter = express.Router();
const transactionService = require('../services/transactionService.js');

transactionRouter.get('/', transactionService.findByDate);


module.exports = transactionRouter;
