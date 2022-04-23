import "./Settings.scss";
import React, { useState } from "react";
import { Page, pages } from "../Page";
import GeneralSettingsView from "../../views/settings/generalSettingsView/GeneralSettingsView";
import EditProfileView from "../../views/settings/editProfileView/EditProfileView";
import ChangePasswordView from "../../views/settings/changePasswordView/ChangePasswordView";
import ArrowIcon from "@mui/icons-material/ArrowBackIos";
import Button from "@mui/material/Button";

const Settings = () => {
  const [activeSettingsView, setActiveSettingsView] = useState(
    settingPages.GENERAL
  );

  const getCorrectSettingsPage = () => {
    switch (activeSettingsView) {
      case settingPages.GENERAL:
        return (
          <GeneralSettingsView setActiveSettingsView={setActiveSettingsView} />
        );
      case settingPages.EDIT_PROFILE:
        return (
          <EditProfileView setActiveSettingsView={setActiveSettingsView} />
        );
      case settingPages.CHANGE_PASSWORD:
        return (
          <ChangePasswordView setActiveSettingsView={setActiveSettingsView} />
        );
    }
  };
  return (
    <Page currentPage={pages.SETTINGS}>
      <div className='settings-page'>
        <div className='settings-page-header'>
          {activeSettingsView !== settingPages.GENERAL && (
            <Button
              className='settings-page-back-button'
              sx={{ minWidth: "45px", textAlign: "center" }}
              onClick={() => setActiveSettingsView(settingPages.GENERAL)}>
              <ArrowIcon />
            </Button>
          )}
          <h1>Settings</h1>
          <p>{activeSettingsView}</p>
        </div>

        <div className='settings-view'>{getCorrectSettingsPage()}</div>
      </div>
    </Page>
  );
};
export const settingPages = {
  GENERAL: "General",
  EDIT_PROFILE: "Edit Profile",
  CHANGE_PASSWORD: "Change Password",
};

export default Settings;
