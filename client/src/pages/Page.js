import React from "react";
import { Link } from "react-router-dom";
import "./Page.scss";

/**
 * A wrapper that should go around every page
 * @author  Ethan Cannelongo
 * @date   02/13/2022
 */
const Page = props => {
  return (
    <div className='page'>
      <Link to='/' style={{ textDecoration: "none", color: "black" }}>
        <h1>Social Media</h1>
      </Link>

      <div className='page-contents'>{props.children}</div>
    </div>
  );
};

export default Page;
