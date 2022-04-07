import "./Logo.scss";
import React from "react";

const Logo = props => {
  return <h1 className={"header-title " + props.nameOfClass}>Social Media</h1>;
};

export default Logo;
