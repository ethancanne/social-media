import "./Settings.scss";
import React, { useEffect, useState } from "react";
import { Page, pages } from "../Page";
import GeneralSettingsView from "../../views/settings/generalSettingsView/GeneralSettingsView";
import EditProfileView from "../../views/settings/editProfileView/EditProfileView";
import ChangePasswordView from "../../views/settings/changePasswordView/ChangePasswordView";
import ArrowIcon from "@mui/icons-material/ArrowBackIos";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";

const Settings = props => {
  const history = useHistory();
  const defaultView = props.match.params.defaultView || settingPages.GENERAL;
  const [activeSettingsView, setActiveSettingsView] = useState(defaultView);

  useEffect(() => {
    setActiveSettingsView(props.match.params.defaultView);
  }, [props.match.params.defaultView]);

  const runSettingsAnimation = isForwards => {
    const settingsView = document.querySelector(".settings-view");
    if (settingsView && isForwards) {
      document
        .querySelector(".settings-view")
        .classList.remove("add-forwards-animation", "add-backwards-animation");
      void settingsView.offsetWidth;
      document
        .querySelector(".settings-view")
        .classList.add("add-forwards-animation");
    } else if (!isForwards && settingsView) {
      document
        .querySelector(".settings-view")
        .classList.remove("add-backwards-animation", "add-forwards-animation");
      void settingsView.offsetWidth;
      document
        .querySelector(".settings-view")
        .classList.add("add-backwards-animation");
    }
  };
  const getCorrectSettingsPage = () => {
    switch (activeSettingsView) {
      case settingPages.GENERAL:
        runSettingsAnimation(false);
        return <GeneralSettingsView />;
      case settingPages.EDIT_PROFILE:
        runSettingsAnimation(true);
        return <EditProfileView />;
      case settingPages.CHANGE_PASSWORD:
        runSettingsAnimation(true);
        return <ChangePasswordView />;
    }
  };
  return (
    <div className='settings-page'>
      <div className='settings-page-header'>
        <div className='settings-header-left'>
          {activeSettingsView !== settingPages.GENERAL && (
            <Button
              className='settings-page-back-button'
              sx={{ minWidth: "45px", textAlign: "center" }}
              onClick={() => history.push("/settings/" + settingPages.GENERAL)}>
              <ArrowIcon />
            </Button>
          )}
          <h1>Settings</h1>
        </div>
        <p className='settings-header-right'>{activeSettingsView}</p>
      </div>

      <div className='settings-view'>{getCorrectSettingsPage()}</div>
    </div>
  );
};
export const settingPages = {
  GENERAL: "General",
  EDIT_PROFILE: "Edit Profile",
  CHANGE_PASSWORD: "Change Password",
};

export default Settings;
