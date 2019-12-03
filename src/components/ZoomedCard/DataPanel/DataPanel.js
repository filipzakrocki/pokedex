import React from "react";

import "./DataPanel.css";

const DataPanel = ({ card }) => {
  return (
    <div className="rightPanel" onClick={e => e.stopPropagation()}>
      <h3 className="rightPanel_title">Card information for {card.name}</h3>
      <div className="rightPanel_details">
        <p>Hit Points: {card.hp}</p>
        <p>Pokemon type(s): {card.types ? card.types.join(" ") : null}</p>
        <p>Subtype: {card.subtype}</p>
        <p>
          Reatreat Cost: {card.retreatCost ? card.retreatCost.join(" ") : "0"}
        </p>
        <h4>Card data</h4>
        <p>Set: {card.set}</p>
        <p>Series: {card.series}</p>
        <p>Card's Rarity: {card.rarity}</p>
        <p>Unique ID: {card.id}</p>
      </div>
    </div>
  );
};

export default DataPanel;
