import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import * as transaction from "./api/transaction";
import Table from "./components/Table";

export default function App() {
  const [transactions, setTransactions] = useState([]);
  const [totalAccount, setTotalAccount] = useState(0);

  const handleChangeDate = (value) => {
    getTransationsByDateApi(value);
  };

  const getTransationsByDateApi = async (value = "2020-11") => {
    const result = await transaction.findByDate(value);
    setTransactions(result);
  };

  const getTotalAccount = async () => {
    const result = await transaction.getTotalAccount();
    setTotalAccount(result.total);
  };

  const handleChageSearch = (found) => {
    setTransactions(found);
  };

  useEffect(() => {
    getTransationsByDateApi();
    getTotalAccount();
  }, []);
  return (
    <div>
      <Navbar />
      <Header
        onChangeDateEmit={handleChangeDate}
        transactions={transactions}
        totalAccount={totalAccount}
        onChageSearchEmit={handleChageSearch}
      />
      <Table transactions={transactions} />
    </div>
  );
}
