import "./Home.scss";
import React, { useState } from "react";
import { Page, pages } from "../Page";
import axios from "axios";

/**
 * Renders the Dashboard of the application.
 * @author  Ethan Cannelongo
 * @date   2/13/2022
 */
const Home = props => {
  const sendRequest = async () => {
    const res = await axios.post("/api/signIn", {});
    console.log(res);
  };
  return (
    <Page currentPage={pages.HOME}>
      <div className='home-page'>
        <h1>Home</h1>
        <button onClick={sendRequest}>Send request</button>
      </div>
    </Page>
  );
};

export default Home;
