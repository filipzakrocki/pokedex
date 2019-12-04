import React, { useState } from "react";
import { connect } from "react-redux";
import Spinner from "../UI/Spinner/Spinner";
import Card from "./Card/Card";

import "./Results.css";

const Results = props => {
  let list = null;
  let style = { display: "block" };

  if (props.loading) {
    list = <Spinner />;
  } else if (props.error) {
    list = <h3>ERROR: {props.error.message}!</h3>;
  } else if (props.results) {
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
              imageUrlHiRes={card.imageUrlHiRes}
              onLoad={console.log(
                "PLEASE ADD THE FUNCTIONALITY TO DISPLAY ALL IMAGES ONLY WHEN ALL OF THEM ARE LOADED :'("
              )}
            />
          );
        })
      );
  }

  return (
    <div style={style} className={"Results"}>
      {list}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    results: state.search.results,
    loading: state.search.loading,
    error: state.search.error
  };
};

export default connect(mapStateToProps, null)(Results);
