import React from "react";
import Spinner from "../UI/Spinner/Spinner";
import { connect } from "react-redux";

import "./ZoomedCard.css";

const ZoomedCard = props => {
  const card = props.results[props.selectedCard];

  const cardReady = card.imageUrlHiRes ? (
    <div className={"zoomedWrapper"} onClick={null}>
      <div className="leftPanel">
        <img title={card.name} alt={card.name} src={card.imageUrlHiRes}></img>
        <p>{card.artist}</p>
      </div>
      <div className="rightPanel">
        <h3 className="title">Card information for {card.name}</h3>
        <p>{card.hp}</p>
        <p>{card.type}</p>
        <p>{card.hp}</p>
        <p>{card.hp}</p>
        <p>{card.hp}</p>
        <p>{card.retreatCost}</p>
        <p>Set: {card.set}</p>
        <p>Card's Rarity: {card.rarity}</p>
        <p>Unique ID: {card.id}</p>
      </div>
    </div>
  ) : (
    <Spinner />
  );

  return cardReady;
};

const mapStateToProps = state => {
  return {
    selectedCard: state.search.zoomedCardIndex,
    results: state.search.results
  };
};

export default connect(mapStateToProps)(ZoomedCard);

//Sample data from one card
// artist: "5ban Graphics"
// attacks: (2) [{…}, {…}]
// convertedRetreatCost: 1
// hp: "130"
// id: "xyp-XY174"
// imageUrl: "https://images.pokemontcg.io/xyp/XY174.png"
// imageUrlHiRes: "https://images.pokemontcg.io/xyp/XY174_hires.png"
// name: "Pikachu-EX"
// nationalPokedexNumber: 25
// number: "XY174"
// rarity: "Common"
// resistances: [{…}]
// retreatCost: ["Colorless"]
// series: "XY"
// set: "XY Black Star Promos"
// setCode: "xyp"
// subtype: "EX"
// supertype: "Pokémon"
// text: ["When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards."]
// types: ["Lightning"]
// weaknesses: [{…}]
//
// STOP PROPAGATION?
