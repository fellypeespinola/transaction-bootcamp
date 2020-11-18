const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require("../models/TransactionModel");

const findById = async function (req, res) {
  try {
    const transaction = await TransactionModel.findOne({
      _id: ObjectId(req.params.id),
    });

    res.send(transaction);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

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
    res.status(500).send({ error: e.message });
  }
};

const create = async function (req, res) {
  try {
    const transaction = new TransactionModel(req.body);
    await transaction.save();

    res.send(transaction);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

const update = async function (req, res) {
  try {
    const transaction = await TransactionModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.send(transaction);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

const deleteOne = async function (req, res) {
  try {
    const transaction = await TransactionModel.deleteOne({
      _id: ObjectId(req.params.id),
    });

    const deleted = transaction.n == 1 ? true : false;

    res.send({ deleted });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

const findByDescription = async function (req, res) {
  try {
    const result = await TransactionModel.find({
      description: { $regex: req.body.term, $options: "i" },
    });
    res.send(result);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

module.exports = {
  findById,
  findByDate,
  create,
  update,
  deleteOne,
  findByDescription,
};
