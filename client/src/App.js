import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import * as transaction from "./api/transaction";
import Table from "./components/Table";

export default function App() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // transaction.findByDate("2020-11").then(result => {
      //   console.log(result)
      //   setTransactions(result);
      // });   

      const result = await transaction.findByDate("2020-11");
      console.log(result);
      setTransactions(result);
      
    }

    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <Header />
      <Table transactions={transactions} />
    </div>
  );
}
