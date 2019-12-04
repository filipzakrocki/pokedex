import React, { useState } from "react";
import { connect } from "react-redux";
import Spinner from "../UI/Spinner/Spinner";
import Card from "./Card/Card";

import "./Results.css";

const Results = props => {
  let list = null;
  let spinner = null;
  let style = { display: "none" };

  if (props.loading) {
    spinner = <Spinner />;
    list = null;
  } else if (props.error) {
    list = <h3>ERROR: {props.error.message}!</h3>;
    spinner = null;
  } else if (props.results) {
    style = {
      display: props.results.length === props.loadedImages ? "block" : "none"
    };
    list =
      props.results.length === 0 ? (
        <p>No results found :(</p>
      ) : (
        props.results.map((card, index) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              index={index}
              name={card.name}
              imageUrl={card.imageUrl}
            />
          );
        })
      );
  }

  return (
    <div className={"Results"}>
      {spinner}
      <div style={style}>{list}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    results: state.search.results,
    loading: state.search.loading,
    error: state.search.error,
    loadedImages: state.search.loadedImages
  };
};

export default connect(mapStateToProps, null)(Results);
