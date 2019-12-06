import React from "react";
import "./Searchbar.css";
//components
import Tooltip from "./Tooltip/Tooltip";
import SearchInput from "./SearchInput/SearchInput";
import PokeSearchButton from "./PokeSearchButton/PokeSearchButton";

const Searchbar = props => {
  return (
    <div className={"Searchbar-input__wrapper"}>
      <Tooltip />
      <SearchInput />
      <PokeSearchButton />
    </div>
  );
};

export default Searchbar;
