import React from "react";
import "../core.scss";

/**
 * Renders a form.
 * @author Ethan Cannelongo
 * @date   01/30/2022
 */
const Form = props => {
  return (
    <form className='form' {...props}>
      {props.children}
    </form>
  );
};

export default Form;
