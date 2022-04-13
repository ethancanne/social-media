import "./Logo.scss";
import React from "react";

const Logo = props => {
  return <h1 className={"header-title " + props.nameOfClass}>Project Tres</h1>;
};

export default Logo;
