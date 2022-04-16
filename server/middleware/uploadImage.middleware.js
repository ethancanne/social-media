import multer from "multer";

// This is used to allow users to upload attachments to their posts.
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype) || file.size < 2000000) {
    cb(null, true); //Success Callback
  } else {
    req.attachmentFailed = true;
    Log.write("The file format is not supported.");
    cb(null, false, req.profilattachment); //Fail Callback
  }
};
export const uploadImage = multer({
  fileFilter: fileFilter,
});
