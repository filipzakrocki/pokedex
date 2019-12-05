import React from "react";
import { connect } from "react-redux";
import Spinner from "../UI/Spinner/Spinner";
import Card from "./Card/Card";

import "./Results.css";

const Results = props => {
  let list = null;
  let spinner = null;
  let error = null;
  let style = { display: "none" };

  //fetching data loading
  if (props.loading) {
    spinner = <Spinner />;
    list = null;
    //error handling
  } else if (props.error) {
    spinner = null;
    error = <h3>ERROR: {props.error.message}!</h3>;
    //results fetched
  } else if (props.results && props.results.length !== 0) {
    // spinner is active until all the images are rendered
    spinner = <Spinner />;
    // images finished rendering
    if (props.results.length === props.loadedImages) {
      style = { display: "block" };
      spinner = null;
    }
    list = props.results.map((card, index) => {
      return (
        <Card
          key={card.id}
          id={card.id}
          index={index}
          name={card.name}
          imageUrl={card.imageUrl}
        />
      );
    });
  } else if (props.results && props.results.length === 0) {
    error = <h3>No results found....</h3>;
  }

  return (
    <div className={"Results"}>
      {spinner}
      {error}
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
