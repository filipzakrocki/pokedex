import React from "react";

import "./Search.scss";

import Logo from "./Logo/Logo";
import CounterCircle from "./CounterCircle/CounterCircle";
import QuestionBlurb from "./QuestionBlurb/QuestionBlurb";
import Searchbar from "./Searchbar/Searchbar";

const Search = props => {
  return (
    <div className="Search-wrapper">
      <Logo />
      <CounterCircle />
      <QuestionBlurb />
      <Searchbar />
    </div>
  );
};

export default Search;
