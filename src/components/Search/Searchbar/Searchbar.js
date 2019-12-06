import React from "react";
import { connect } from "react-redux";
import "./Searchbar.css";
import * as actions from "../../../store/actions/index";

import Pokeball from "../../../assets/pokeball.png";

const Searchbar = props => {
  return (
    <div className={"Searchbar-input__wrapper"}>
      <button className={"Searchbar-button Searchbar-tooltip"}>
        ?
        <span className={"Searchbar-tooltiptext"}>
          <p>
            Tip: You can add filters to your search with: hp, attackDamage,
            attackCost, retreatCost.
          </p>
          <p>Example: 'Pikachu hp>70 attackDamage=80'</p>
        </span>
      </button>
      <input
        className={"Searchbar-input"}
        type="text"
        placeholder="Search for Pokemon TCG cards!"
        onChange={event => props.setQuery(event.target.value)}
        onKeyPress={event =>
          event.key === "Enter" ? props.fetchPokemon(props.query) : null
        }
      />
      <button
        className={"Searchbar-button"}
        onClick={() => props.fetchPokemon(props.query)}
      >
        <img src={Pokeball} alt="Search" className={"Searchbar-buttonImg"} />
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    query: state.search.query,
    results: state.search.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setQuery: query => dispatch(actions.setSearchQuery(query)),
    fetchPokemon: query => dispatch(actions.fetchPokemon(query))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
