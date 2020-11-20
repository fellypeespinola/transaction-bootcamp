import React, { useState, useEffect } from "react";
import CardHeader from "./CardHeader";
import Calendar from "./Calendar";
import { formatCurrency } from "../helpers/formatValues";
import Search from "./Search";

export default function Header({
  onChangeDateEmit,
  transactions,
  totalAccount,
}) {
  const [lancamentos, setLancamentos] = useState(0);
  const [receitas, setReceitas] = useState(0);
  const [despesas, setDespesas] = useState(0);
  const [transactionList, setTransactionList] = useState({});

  const calcTransactions = () => {
    let r = 0;
    let d = 0;

    transactions.forEach((transaction) => {
      const { type, value } = transaction;

      if (type === "+") {
        r += value;
      } else if (type === "-") {
        d += value;
      }
    });

    setReceitas(r);
    setDespesas(d);
    setLancamentos(transactions.length);
  };

  useEffect(() => {
    calcTransactions();
    setTransactionList(transactions);
  }, [transactions]);

  const handleChangeDate = (value) => {
    onChangeDateEmit(value);
  };

  const handlleChangeSearch = (found) => {
    setTransactionList(found);
  }

  return (
    <div className="container">
      <div className="row">
        <Calendar onChangeDateEmit={handleChangeDate} />
        <Search transactions={transactions} onChangeSearchEmit={handlleChangeSearch} />
      </div>
      <div className="row">
        <div className="col s12">
          <h5>Dashboard</h5>
        </div>
      </div>
      <div className="row">
        <CardHeader
          name="Lançamentos"
          value={lancamentos}
          icon="account_balance"
          iconColor="#2196F3"
        />
        <CardHeader
          name="Receitas"
          value={formatCurrency(receitas)}
          icon="keyboard_arrow_up"
          iconColor="#4CAF50"
        />
        <CardHeader
          name="Despesas"
          value={formatCurrency(despesas)}
          icon="keyboard_arrow_down"
          iconColor="#F44336"
        />
        <CardHeader
          name="Saldo"
          value={formatCurrency(totalAccount)}
          icon="local_atm"
          iconColor="#00796B"
        />
      </div>
    </div>
  );
}
