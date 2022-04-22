import "./Loading.scss";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loading = () => {
  return (
    <div className='loading'>
      <Box sx={{ overflow: "hidden" }}>
        <CircularProgress sx={{ color: "rgb(160, 124, 247)" }} />
      </Box>
    </div>
  );
};

export default Loading;
