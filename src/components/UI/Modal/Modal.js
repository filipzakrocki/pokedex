import React from "react";
import "./Modal.css";

import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

import ZoomedCard from "../../ZoomedCard/ZoomedCard";

const Modal = props => {
  // if show then display backdrop + zoomed card
  // split modal to backdrop and zoomed card?

  let modal = props.modalOpen ? (
    <div className="Modal" onClick={() => props.closeModal()}>
      <ZoomedCard />
    </div>
  ) : null;

  return modal;
};

const mapStateToProps = state => {
  return {
    modalOpen: state.search.modalOpen
  };
};
const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(actions.closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
