import React from "react";
import "./Spinner.css";

import pokeball from "../../../assets/pokeball.png";

const spinner = () => {
  return <img alt={"spinner"} className="rotate" src={pokeball} />;
};

export default spinner;
