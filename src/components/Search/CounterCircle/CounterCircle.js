import React from "react";
import { connect } from "react-redux";
import "./CounterCircle.css";

const CounterCircle = props => {
  return (
    <div className="poke-circle">
      <div className="poke-circle2">
        <div className="poke-circle3">
          {props.results && props.results.length > 0
            ? props.results.length
            : ""}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    results: state.search.results
  };
};

export default connect(mapStateToProps, null)(CounterCircle);
