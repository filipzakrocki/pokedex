import React from "react";
//redux
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";
//assets
import "./PokeSearchButton.css";
import Pokeball from "../../../../assets/pokeball.png";

const PokeSearchButton = props => {
  return (
    <button
      className={"Searchbar-button"}
      onClick={() => props.fetchPokemon(props.query)}
    >
      <img src={Pokeball} alt="Search" className={"Searchbar-buttonImg"} />
    </button>
  );
};

const mapStateToProps = state => {
  return {
    query: state.search.query
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPokemon: query => dispatch(actions.fetchPokemon(query))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokeSearchButton);
