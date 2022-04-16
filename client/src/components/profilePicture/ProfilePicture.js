import React from "react";
import Avatar from "@mui/material/Avatar";

const ProfilePicture = ({ image, name, isBase64, size = 40 }) => {
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
        }}
      />
    </>
  );
};

export default ProfilePicture;
