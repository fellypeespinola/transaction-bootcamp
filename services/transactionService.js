const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require("../models/TransactionModel");

const findByDate = async function (req, res) {
  try {
    if (!req.query.period) throw new Error("Falta de data");

    const period = req.query.period;
    const dates = period.split("-");

    const list = await TransactionModel.find({
      year: dates[0],
      month: dates[1],
    });

    res.send(list);
  } catch (e) {
    res.status(500).send({error: e.message});
  }
};

module.exports = { findByDate };
