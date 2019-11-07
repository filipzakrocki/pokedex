import React from "react";
import { connect } from "react-redux";
import Card from "./card";

const results = props => {
  let list = !props.results ? (
    <p>Waiting for your input!</p>
  ) : (
    props.results.map(card => {
      return <Card name={card.name} imageUrl={card.imageUrl} />;
    })
  );

  return list;
};

const mapStateToProps = state => {
  return {
    results: state.search.results
  };
};

export default connect(
  mapStateToProps,
  null
)(results);
