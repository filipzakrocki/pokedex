import React from "react";
import { connect } from "react-redux";

const ZoomedCard = props => {
  return (
    <div>
      <h1>{props.selectedCard}</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedCard: state.search.zoomedCard
  };
};

export default connect(mapStateToProps)(ZoomedCard);
