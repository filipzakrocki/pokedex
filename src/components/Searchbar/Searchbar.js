import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const Searchbar = props => {
  return (
    <div>
      <div>
        <label>What pokemon card are you looking for?</label>
      </div>
      <input
        type="text"
        placeholder="pokemon name"
        onChange={event => props.setQuery(event.target.value)}
      />
      <button onClick={() => props.fetchPokemon(props.query)}>Submit</button>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searchbar);
