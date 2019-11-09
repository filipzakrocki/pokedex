import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

const Card = props => {
  return (
    <img
      alt={props.name}
      src={props.imageUrl}
      title={props.name}
      id={props.id}
      onClick={event => props.openModal(event.target.id)}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: id => dispatch(actions.openModal(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Card);
