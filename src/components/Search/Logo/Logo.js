import React from "react";
import LogoIMG from "../../../assets/logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className={"Searchbar-logo__wrapper"}>
      <img className={"Searchbar-logo"} src={LogoIMG} alt="logo" />
    </div>
  );
};

export default Logo;
