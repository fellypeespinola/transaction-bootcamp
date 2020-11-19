import React from "react";
import css from "./table.module.css"
import { formatCurrency } from "../helpers/formatValues"

export default function Table({ transactions }) {
  return (
    <div className="container">
      <table className="responsive-table ">
        <thead>
          <tr>
            <th>Situação</th>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Valor</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => {
             return (
              <tr key={transaction._id} style={(transaction.type === "+") ? {backgroundColor: '#F1F3FF'} : {}}>
                <td>{(transaction.type === "+") ? <i className={`${css.tableIcon} small material-icons`} style={{color:'#4CAF50'}}>add_circle</i> : <i class={`${css.tableIcon} small material-icons`} style={{color:'#F44336'}}>remove_circle</i>}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{formatCurrency(transaction.value)}</td>
                <td>
                  <i className={`${css.tableIcon} small material-icons`}>edit</i>
                  <i className={`${css.tableIcon} small material-icons`}>delete</i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
