import React from "react";
import Avatar from "@mui/material/Avatar";

const ProfilePicture = ({ image, name, size, isBase64 = true }) => {
  return (
    <>
      <Avatar
        alt={name}
        src={isBase64 ? "data:image/png;charset=utf-8;base64," + image : image}
        sx={{
          maxWidth: size,
          maxHeight: size,
          minWidth: size,
          minHeight: size,
          border: "1px solid #e6e6e6",
        }}
      />
    </>
  );
};

export default ProfilePicture;
