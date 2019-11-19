import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import "./Searchbar.css";

const Searchbar = props => {
  return (
    <div className={"Searchbar"}>
      <div className={"Searchbar-label__wrapper"}>
        <label className={"Searchbar-label"}>
          What pokemon card are you looking for?
        </label>
      </div>
      <div className={"Searchbar-input__wrapper"}>
        <input
          className={"Searchbar-input"}
          type="text"
          placeholder="Search for Pokemon TCG cards!"
          onChange={event => props.setQuery(event.target.value)}
          onKeyPress={event =>
            event.key === "Enter" ? props.fetchPokemon(props.query) : null
          }
        />
      </div>
      <div className={"Searchbar-button__wrapper"}>
        <button
          className={"Searchbar-button"}
          onClick={() => props.fetchPokemon(props.query)}
        >
          Submit
        </button>
      </div>
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
