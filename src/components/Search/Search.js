import React from "react";

import "./Search.scss";

import Logo from "./Logo/Logo";
import CounterCircle from "./CounterCircle/CounterCircle";
import QuestionBlurb from "./QuestionBlurb/QuestionBlurb";
import Searchbar from "./Searchbar/Searchbar";

const Search = (props) => {
  return (
    <>
      <div className="Search-wrapper">
        <Logo />
        <QuestionBlurb />
        <Searchbar />
      </div>
      <div style={{ position: "absolute" }}>
        <CounterCircle />
      </div>
    </>
  );
};

export default Search;
