import React from "react";

import Card from './card'

function Results(props) {

  let list = <p>Waiting for your input!</p>;

  if (props.results) {
    list = props.results.map(el => {

      return <Card imageUrl={el.imageUrl} key={el.id}>{el.name}</Card>;
    });
  }
  return <>{list}</>;
}

export default Results;
