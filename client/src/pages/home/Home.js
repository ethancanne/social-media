import "./Home.scss";
import React, { useState } from "react";
import { Page, pages } from "../Page";
import axios from "axios";
import Posts from "../../views/posts/Posts";

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
        <Posts />
      </div>
    </Page>
  );
};

export default Home;
