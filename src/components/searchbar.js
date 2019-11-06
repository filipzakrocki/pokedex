import React from "react";

const Searchbar = props => {
  return (
    <div>
      <label>What pokemon are you looking for? </label>
      <input
        type="text"
        placeholder="pokemon name"
        onChange={event => props.changeHandler(event.target.value)}
      />
    </div>
  );
};

export default Searchbar;
