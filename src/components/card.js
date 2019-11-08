import React from "react";

const Card = props => {
  return <img alt={props.name} src={props.imageUrl} title={props.name} />;
};

export default Card;
