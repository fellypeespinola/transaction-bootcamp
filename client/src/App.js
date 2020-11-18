import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import * as transaction from "./api/transaction";

export default function App() {
  useEffect(() => {
    async function fetchData() {
      const result = await transaction.findByDate("2020-11");
    }

    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <Header />
    </div>
  );
}
