import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

export default function Calendar() {
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

  const handleChange = (event) => {};

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className="input-field col s12">
      <select value={selectedDate} onChange={handleChange}>
        {years.map((year) => {
          return months.map((month, index) => {
            return (
              <option
                key={`${index + 1}-${year}`}
                value={`${index + 1}-${year}`}
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
