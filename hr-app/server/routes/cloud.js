// "use strict";

const express = require("express");
const router = express.Router();

// include CLOUDINARY:
const fileUpload = require("../configs/cloudinary-setup");
// const { cloudinary } = require("../configs/cloudinary-setup");

router.post("/upload", fileUpload.single("imageUrl"), (req, res, next) => {

  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  // get secure_url from the file object and save it in the
  // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
  res.json({ secure_url: req.file.secure_url });
});

// router.post("/upload", async (req, res, next) => {
//   try {
//     const fileStr = req.body.data;
//     const uploadedResponse = await cloudinary.uploader.upload(fileStr, { upload_preset: hr_app })
//     console.log("backend uploaded_preset", uploadedResponse);
//     res.json({message: "great! uploaded the file"})
//   } catch (error) {
//     console.log("the error uploading file is:",error);
//     res.status(500).json({err: "Something went wrong"})
//   }
// });

module.exports = router;
