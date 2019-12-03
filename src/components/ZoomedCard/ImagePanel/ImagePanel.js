import React from "react";

import "./ImagePanel.css";

const LeftPanel = ({ card }) => {
  return (
    <div className="leftPanel" onClick={e => e.stopPropagation()}>
      <img title={card.name} alt={card.name} src={card.imageUrlHiRes}></img>
      <p>Artist: {card.artist}</p>
    </div>
  );
};

export default LeftPanel;
