import React from "react";

const Searchbar = props => {
  return (
    <div>
      <label>What pokemon card are you looking for? </label>
      <input
        type="text"
        placeholder="pokemon name"
        onChange={event => props.changeHandler(event.target.value)}
      />
      <button onClick={() => props.searchSubmitted()}>Submit</button>
    </div>
  );
};

export default Searchbar;
