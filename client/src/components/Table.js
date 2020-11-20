import React, { useEffect } from "react";
import css from "./table.module.css";
import { formatCurrency } from "../helpers/formatValues";
import Modal from "./Modal";

export default function Table({ transactions }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedTransaction, setSelectedTransaction] = React.useState({});

  const openModal = (transaction) => {
    setIsOpen(true);
    setSelectedTransaction(transaction);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {}, []);

  return (
    <div className="container">
      <Modal
        modalIsOpen={modalIsOpen}
        modalClose={closeModal}
        transaction={selectedTransaction}
        edit={true}
      />

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
              <tr
                key={transaction._id}
                style={
                  transaction.type === "+" ? { backgroundColor: "#F1F3FF" } : {}
                }
              >
                <td>
                  {transaction.type === "+" ? (
                    <i
                      className={`${css.tableIcon} small material-icons`}
                      style={{ color: "#4CAF50" }}
                    >
                      add_circle
                    </i>
                  ) : (
                    <i
                      className={`${css.tableIcon} small material-icons`}
                      style={{ color: "#F44336" }}
                    >
                      remove_circle
                    </i>
                  )}
                </td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{formatCurrency(transaction.value)}</td>
                <td>
                  <a onClick={() => openModal(transaction)}>
                    <i className={`${css.tableIcon} small material-icons`}>
                      edit
                    </i>
                  </a>
                  <i className={`${css.tableIcon} small material-icons`}>
                    delete
                  </i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
