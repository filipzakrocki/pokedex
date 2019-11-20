import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

import "./Card.css";

const Card = props => {
  return (
    <img
      className={"Card"}
      alt={props.name}
      src={props.imageUrl}
      title={props.name}
      id={props.id}
      onClick={() => props.openModal(props.index)}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: index => dispatch(actions.openModal(index))
  };
};

export default connect(null, mapDispatchToProps)(Card);
