import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import UserState from "./context/user/UserState";
import NotificationState from "./context/notification/NotificationState";
import axios from "axios";

axios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});

ReactDOM.render(
  <React.StrictMode>
    <NotificationState>
      <UserState>
        <App />
      </UserState>
    </NotificationState>
  </React.StrictMode>,

  document.getElementById("root")
);
