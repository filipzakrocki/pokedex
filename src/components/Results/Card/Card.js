import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

import "./Card.css";

const Card = props => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const image = imageLoaded ? (
    <img
      className={"Card"}
      alt={props.name}
      src={props.imageUrl}
      title={props.name}
      id={props.id}
      onClick={() => props.openModal(props.index)}
    />
  ) : null;

  return (
    <>
      {image}
      {/* hidden div to render the wrapper only after it hi res image is loaded */}
      <div style={{ display: "none" }}>
        <img
          src={props.imageUrl}
          alt={"placeholder"}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: index => dispatch(actions.openModal(index))
  };
};

export default connect(null, mapDispatchToProps)(Card);
