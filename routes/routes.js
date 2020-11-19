const express = require('express');
const transactionRouter = express.Router();
const transactionService = require('../services/transactionService.js');

transactionRouter.get('/', transactionService.findByDate);
transactionRouter.get('/find/id/:id', transactionService.findById);
transactionRouter.post('/create', transactionService.create);
transactionRouter.put('/update/:id', transactionService.update);
transactionRouter.delete('/delete/:id', transactionService.deleteOne);
transactionRouter.post('/find/description/', transactionService.findByDescription);
transactionRouter.get('/sum/total/', transactionService.sumValueAccount);


module.exports = transactionRouter;
