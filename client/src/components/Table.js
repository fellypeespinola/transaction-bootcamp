import React from "react";

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
              <tr key={transaction._id}>
                <td>{transaction.type}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.value}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
