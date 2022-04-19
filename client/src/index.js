import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import UserState from "./context/user/UserState";
import PageState from "./context/page/PageState";
import axios from "axios";

axios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});

ReactDOM.render(
  <React.StrictMode>
    <PageState>
      <UserState>
        <App />
      </UserState>
    </PageState>
  </React.StrictMode>,

  document.getElementById("root")
);
