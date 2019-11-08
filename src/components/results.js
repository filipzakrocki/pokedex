import React from "react";
import { connect } from "react-redux";
import Spinner from "./UI/Spinner/Spinner";
import Card from "./card";

const results = props => {
  let list = <p>Waiting for your input!</p>;

  if (props.loading) {
    list = <Spinner />;
  } else if (props.results) {
    list = props.results.map(card => {
      return (
        <Card
          key={card.id}
          name={card.name}
          imageUrl={card.imageUrl}
          imageUrlHiRes={card.imageUrlHiRes}
        />
      );
    });
  }

  return list;
};

const mapStateToProps = state => {
  return {
    results: state.search.results,
    loading: state.search.loading
  };
};

export default connect(
  mapStateToProps,
  null
)(results);
