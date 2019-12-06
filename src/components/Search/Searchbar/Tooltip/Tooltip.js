import React from "react";
import "./Tooltip.css";

const Tooltip = () => {
  return (
    <button className={"Searchbar-button Searchbar-tooltip"}>
      ?
      <span className={"Searchbar-tooltiptext"}>
        <p>
          Tip: You can add filters to your search with: hp, attackDamage,
          attackCost, retreatCost.
        </p>
        <p>Example: 'Pikachu hp>70 attackDamage=80'</p>
      </span>
    </button>
  );
};

export default Tooltip;
