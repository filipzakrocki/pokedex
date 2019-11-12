import React from "react";
import { connect } from "react-redux";
import Spinner from "../UI/Spinner/Spinner";
import Card from "./Card/Card";

const results = props => {
  let list = <p>Waiting for your input!</p>;

  if (props.loading) {
    list = <Spinner />;
  } else if (props.results) {
    list = props.results.map((card, index) => {
      return (
        <Card
          key={card.id}
          id={card.id}
          index={index}
          name={card.name}
          imageUrl={card.imageUrl}
          imageUrlHiRes={card.imageUrlHiRes}
        />
      );
    });
  }

  // add modal somewhere there

  return list;
};

const mapStateToProps = state => {
  return {
    results: state.search.results,
    loading: state.search.loading
  };
};

export default connect(mapStateToProps, null)(results);
