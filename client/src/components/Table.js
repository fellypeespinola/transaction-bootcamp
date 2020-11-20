import React, { useEffect } from "react";
import css from "./table.module.css";
import { formatCurrency } from "../helpers/formatValues";
import Modal from "react-modal";
import M from "materialize-css/dist/js/materialize.min.js";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: '500px'
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

export default function Table({ transactions }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  var subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
    var elems = document.querySelectorAll(".datepicker");
    var instances = M.Datepicker.init(elems);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    
  }, []);

  return (
    <div className="container">
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <form>
          <div className="input-field">
            <input id="descripion" type="text" className="validate" />
            <label htmlFor="descripion">Descrição</label>
          </div>
          <div className="input-field">
            <input id="category" type="text" className="validate" />
            <label htmlFor="category">Categoria</label>
          </div>
          <div className="input-field">
            <input id="value" type="text" className="validate" />
            <label htmlFor="value">Valor</label>
          </div>
          <div className="input-field">
            <input id="data" type="text" className="datepicker" />

            <label htmlFor="data">Data</label>
          </div>
        </form>
      </Modal>

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
                  <i className={`${css.tableIcon} small material-icons`}>
                    edit
                  </i>
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
