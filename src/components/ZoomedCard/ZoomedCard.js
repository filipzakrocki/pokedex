import React, { useState } from "react";
import Spinner from "../UI/Spinner/Spinner";
import { connect } from "react-redux";

import "./ZoomedCard.css";
import ImagePanel from "./ImagePanel/ImagePanel";
import DataPanel from "./DataPanel/DataPanel";

const ZoomedCard = props => {
  //selecting a card fromt he results on the basis of props.selectedCard (by index)
  const card = props.results[props.selectedCard];

  const [imageLoaded, setImageLoaded] = useState(false);

  const image = imageLoaded ? (
    <div className={"zoomedWrapper"}>
      <ImagePanel card={card} />
      <DataPanel card={card} />
    </div>
  ) : (
    <div>
      <Spinner />
    </div>
  );

  const cardReady = (
    <>
      {image}
      {/* hidden div to render the wrapper only after it hi res image is loaded */}
      <div style={{ display: "none" }}>
        <img
          src={card.imageUrlHiRes}
          alt={"placeholder"}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
    </>
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
