import React, { useState } from "react";

export default function Search({transactions, onChangeSearchEmit}) {
    const [searchTerm, setSearchTerm ] = useState('');

    const handleOnChangeSearch = (event) => {
        const search  = event.target.value.toLowerCase();

        const found = transactions.filter(transaction => {
            const descriptionLC = transaction.description.toLowerCase();
            return descriptionLC.includes(search) 
        })

        console.log(found);
        onChangeSearchEmit(found);
    }

  return (
    <div className="input-field col s6">
      <i className="small material-icons prefix">search</i>
      <textarea id="icon_prefix2" className="materialize-textarea" onChange={handleOnChangeSearch}></textarea>
      <label htmlFor="icon_prefix2">Pesquisar</label>
    </div>
  );
}
