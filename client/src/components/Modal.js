import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import M from "materialize-css/dist/js/materialize.min.js";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "800px",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
ReactModal.setAppElement("#root");

// import { Container } from './styles';

export default function Modal({ modalIsOpen, modalClose, transaction, edit }) {
  const [data, setData] = useState({});
  const [description, setDesciption] = useState("");
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  var subtitle;

  function closeModal() {
    modalClose();
  }

  const handleChangeData = (e) => {
    //setData(e);
  };

  const handleChangeDescription = (e) => {
    setDesciption(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
    var elems = document.querySelectorAll(".datepicker");
    var instances = M.Datepicker.init(elems, {
      onSelect: function (e) {
        //handleChangeData(e);
      },
    });
  }

  useEffect(() => {
    if (edit) {
      setDesciption(transaction.description);
      setCategory(transaction.category);
      setValue(transaction.value);
    }
  }, [transaction]);

  return (
    <div>
      <ReactModal
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
            <input
              value={description}
              id="descripion"
              type="text"
              className="validate"
              onChange={handleChangeDescription}
            />
            <label className={edit ? "active" : ""} htmlFor="descripion">
              Descrição
            </label>
          </div>
          <div className="input-field">
            <input
              value={category}
              id="category"
              type="text"
              className="validate"
              onChange={handleChangeCategory}
            />
            <label className={edit ? "active" : ""} htmlFor="category">
              Categoria
            </label>
          </div>
          <div className="input-field">
            <input
              value={value}
              id="value"
              type="text"
              className="validate"
              onChange={handleChangeValue}
            />
            <label className={edit ? "active" : ""} htmlFor="value">
              Valor
            </label>
          </div>
          <div className="input-field">
            <input id="data" type="text" className="datepicker" />

            <label className={edit ? "active" : ""} htmlFor="data">
              Data
            </label>
          </div>
        </form>
      </ReactModal>
    </div>
  );
}
