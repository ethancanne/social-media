import "./Dashboard.scss";
import React, { useState } from "react";
import Page from "../Page";
import axios from "axios";

/**
 * Renders the Dashboard of the application.
 * @author  Ethan Cannelongo
 * @date   2/13/2022
 */
const Dashboard = props => {
  const sendRequest = async () => {
    const res = await axios.post("/api/signIn", {});

    console.log(res);
  };
  return (
    <Page>
      <div className='dashboard-page'>
        <button onClick={sendRequest}>Send request</button>
      </div>
    </Page>
  );
};

export default Dashboard;
