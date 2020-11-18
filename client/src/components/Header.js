import React, { useState, useEffect } from "react";
import CardHeader from "./CardHeader";
import Calendar from "./Calendar";

export default function Header() {
  return (
    <div className="container">
      <div className="row">
        <Calendar />
      </div>
      <div className="row">
        <div className="col s12">
          <h5>Dashboard</h5>
        </div>
      </div>
      <div className="row">
        <CardHeader
          name="Lançamentos"
          value="7"
          icon="account_balance"
          iconColor="#2196F3"
        />
        <CardHeader
          name="Receitas"
          value="7"
          icon="keyboard_arrow_up"
          iconColor="#4CAF50"
        />
        <CardHeader
          name="Despesas"
          value="7"
          icon="keyboard_arrow_down"
          iconColor="#F44336"
        />
        <CardHeader
          name="Saldo"
          value="7"
          icon="local_atm"
          iconColor="#00796B"
        />
      </div>
    </div>
  );
}
