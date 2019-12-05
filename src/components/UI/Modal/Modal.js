import React from "react";
import "./Modal.css";

import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

import ZoomedCard from "../../ZoomedCard/ZoomedCard";

const Modal = props => {
  let modal = props.modalOpen ? (
    <>
      <div
        className="Modal"
        onClick={() => {
          props.closeModal();
          document.title = `Pokedex: ${props.query}`;
        }}
      >
        <ZoomedCard />
      </div>
    </>
  ) : null;

  return modal;
};

const mapStateToProps = state => {
  return {
    modalOpen: state.search.modalOpen,
    query: state.search.query
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(actions.closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
