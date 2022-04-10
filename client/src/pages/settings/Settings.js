import "./Settings.scss";
import React from "react";
import { Page, pages } from "../Page";

const Settings = () => {
  return (
    <Page currentPage={pages.SETTINGS}>
      <div className='settings-page'>
        <h1>Settings</h1>
      </div>
    </Page>
  );
};

export default Settings;
