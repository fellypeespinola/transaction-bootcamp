import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

export default function Calendar({ onChangeDateEmit }) {
  const nowDate = new Date(Date.now());
  const initialDate = `${nowDate.getMonth() + 1}-${nowDate.getFullYear()}`;
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const months = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dec",
  ];
  const years = ["2019", "2020", "2021"];

  const handleChangeDate = (event) => {
    onChangeDateEmit(event.target.value);
  };

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className="input-field col s6">
      <select value={selectedDate} onChange={handleChangeDate}>
        {years.map((year) => {
          return months.map((month, index) => {
            return (
              <option
                key={`${year}-${index + 1}`}
                value={`${year}-${index + 1}`}
              >
                {month}/{year}
              </option>
            );
          });
        })}
      </select>
      <label>Selecione uma data</label>
    </div>
  );
}
