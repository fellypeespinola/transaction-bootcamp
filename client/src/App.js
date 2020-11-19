import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import * as transaction from "./api/transaction";
import Table from "./components/Table";

export default function App() {
  const [transactions, setTransactions] = useState([]);

  const handleChangeDate = (value) => {
    getTransationsApi(value);
  };

  const getTransationsApi = async (value = "2020-11") => {
    const result = await transaction.findByDate(value);
    setTransactions(result);
  };

  useEffect(() => {
    getTransationsApi();
  }, []);
  return (
    <div>
      <Navbar />
      <Header onChangeDateEmit={handleChangeDate} transactions={transactions} />
      <Table transactions={transactions} />
    </div>
  );
}
