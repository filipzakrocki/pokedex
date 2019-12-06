import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";
import "./SearchInput.css";

const SearchInput = props => {
  return (
    <input
      className={"Searchbar-input"}
      type="text"
      placeholder="Search for Pokemon TCG cards!"
      onChange={event => props.setQuery(event.target.value)}
      onKeyPress={event =>
        event.key === "Enter" ? props.fetchPokemon(props.query) : null
      }
    />
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
